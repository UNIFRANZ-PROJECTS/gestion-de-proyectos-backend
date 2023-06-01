
const { UserSchema } = require('../models');
const pdfMake = require('pdfmake');
const path = require('path');
const { Readable } = require('stream');
// import * as path from 'path';
// import * as fs from 'fs';
const fs = require('fs')

const { GoogleDriveService } = require('./googleDriveService.js');

const { transporter } = require("../helpers/mailer");

const generateDocument = async (student, comprobanteId, responsableId, detail, received, date, folderName) => {
    const responsable = await UserSchema.findById(responsableId)
    console.log('documento');
    const fonts = {
        Roboto: {
            normal: path.join(__dirname, '../../assets/Roboto/Roboto-Regular.ttf'),
            bold: path.join(__dirname, '../../assets/Roboto/Roboto-Medium.ttf'),
            italics: path.join(__dirname, '../../assets/Roboto/Roboto-Italic.ttf'),
            bolditalics: path.join(__dirname, '../../assets/Roboto/Roboto-MediumItalic.ttf')
        }
    };

    const printer = new pdfMake(fonts);

    const docDefinition = {
        content: [
            {
                table: {
                    widths: ['*', '13%', '19%', '*'],
                    body: [
                        [
                            { text: 'UNIVERSIDAD PRIVADA FRANZ TAMAYO', style: 'tableHeader' },
                            '',
                            { text: 'COMPROBANTE N°', style: 'tableComprobante', },
                            comprobanteId
                        ],
                        [
                            { text: 'FACULTAD DE INGENIERIA', style: 'tableHeader' },
                            '',
                            '',
                            '',
                        ],
                        [
                            { text: 'INGENIERIA DE SISTEMAS', style: 'tableHeader' },
                            '',
                            '',
                            '',
                        ],
                        [
                            { text: 'CENTRO DE ESTUDIANTES', style: 'tableHeader' },
                            '',
                            '',
                            '',
                        ]
                    ],

                },
                layout: 'noBorders',
            },
            { text: '\n' },
            { text: 'COMPROBANTE DE PAGO', fontSize: 24, alignment: 'center' },
            { text: '\n' },
            {
                table: {
                    widths: ['15%', '50%', '*', '*'],
                    body: [
                        [
                            { text: 'Fecha:', style: 'tableTitle' },
                            date,
                            { text: 'Cod. Est.', style: 'tableComprobante', },
                            `${student.code}`
                        ],
                        [
                            { text: 'Nombre:', style: 'tableTitle' },
                            `${student.name} ${student.lastName}`,
                            '',
                            '',
                        ],
                        [
                            { text: 'Emitido por:', style: 'tableTitle' },
                            `${responsable.name} ${responsable.lastName}`,
                            '',
                            '',
                        ],
                    ],

                },
                layout: 'noBorders',
            },
            { text: '\n' },
            {
                table: {
                    widths: ['12%', '*', '20%', '15%'],
                    body: [
                        [
                            { text: 'CANTIDAD', style: 'tableHeader' },
                            { text: 'DESCRIPCION', style: 'tableHeader' },
                            { text: 'PRECIO', style: 'tableHeader' },
                            { text: 'SUBTOTAL', style: 'tableHeader' },
                        ],
                        ...detail.map(element => [
                            `${element.cant}`,
                            element.description,
                            `${element.price}`,
                            `${element.cant * element.price}`,
                        ])

                    ],
                },
            },
            {
                table: {
                    widths: ['*', '36.8%'],
                    body: [
                        [
                            { text: `Son: ${await numeroEnLetras(detail.reduce((sum, element) => sum + (element.price * element.cant), 0))} 00/100 Bolivianos`, style: 'tableTitle' },
                            {
                                table: {
                                    widths: ['57.7%', '*'],
                                    body: [
                                        [
                                            { text: 'TOTAL:', style: 'tableComprobante' },
                                            `${detail.reduce((sum, element) => sum + (element.price * element.cant), 0)}`
                                        ],
                                        [
                                            { text: 'IMPORTE RECIBIDO:', style: 'tableComprobante' },
                                            `${received}`
                                        ],
                                        [
                                            { text: 'IMPORTE DEVUELTO:', style: 'tableComprobante' },
                                            `${received - (detail.reduce((sum, element) => sum + (element.price * element.cant), 0))}`
                                        ]
                                    ]
                                }
                            }
                        ]
                    ]
                },
                layout: 'noBorders',
            }
        ],
        styles: {
            tableHeader: {
                bold: true,
                fontSize: 10,
                alignment: 'center'
            },
            tableTitle: {
                bold: true,
                fontSize: 10,
                alignment: 'left'
            },
            tableComprobante: {
                bold: true,
                fontSize: 10,
                alignment: 'right'
            }
        }
    };

    return new Promise((resolve, reject) => {
        const pdfDoc = printer.createPdfKitDocument(docDefinition);

        let chunks = [];
        pdfDoc.on('data', (chunk) => {
            chunks.push(chunk);
        });
        pdfDoc.on('end', async () => {

            const pdfData = Buffer.concat(chunks);
            const pdfStream = new Readable();
            pdfStream.push(pdfData);
            pdfStream.push(null);
            const pdfBase64 = pdfData.toString('base64');

            const googleDriveService = new GoogleDriveService();

            let folder = await googleDriveService.searchFolder(folderName).catch((error) => {
                console.error(error);
                return null;
            });

            if (!folder) {
                folder = await googleDriveService.createFolder(folderName);
            }
            console.log(folder)
            const response = await googleDriveService.saveFile(comprobanteId, pdfStream, 'application/pdf', folder.id).catch((error) => {
                console.error(error);
            });

            await transporter.sendMail({
                from: `"CENTRO DE ESTUDIANTES" <${process.env.USERGMAIL}>`, // sender address
                to: student.email,
                // to: 'moisic.mo@gmail.com',
                subject: "Comprobante de pago", // Subject line
                html: `
                <b> Muchas gracias por el pago </b>
                <br>
                <h1>CENTRO DE ESTUDIANTES<h1/>
            `,
                attachments: [
                    {
                        filename: `comprobante${comprobanteId}.pdf`,
                        content: pdfBase64,
                        encoding: 'base64',
                    },
                ],
            });
            resolve({ pdfBase64, response });
        });
        pdfDoc.end();
    });
};
function numeroEnLetras(digit) {
    const number = digit;
    let numberString = '0000000000' + number.toString();
    numberString = numberString.substring(number.toString().length, numberString.length);
    let str = '';

    switch ('en-in') {
        case 'en-in':
            const ones = [
                '',
                'uno',
                'dos',
                'tres',
                'cuatro',
                'cinco',
                'seis',
                'siete',
                'ocho',
                'nueve',
                'diez ',
                'once ',
                'doce ',
                'trece ',
                'catorce ',
                'quince ',
                'dieciseis ',
                'diecisiete ',
                'dieciocho ',
                'diecinueve '
            ];
            const onesMiles = [
                '',
                'un ',
                'dos ',
                'tres ',
                'cuatro ',
                'cinco ',
                'seis ',
                'siete ',
                'ocho ',
                'nueve ',
                'diez ',
                'once ',
                'doce ',
                'trece ',
                'catorce ',
                'quince ',
                'dieciseis ',
                'diecisiete ',
                'dieciocho ',
                'diecinueve '
            ];
            const onesMilesPlus = [
                '',
                '',
                'dos',
                'tres',
                'cuatro',
                'cinco',
                'seis',
                'siete',
                'ocho',
                'nueve',
                'diez',
                'once ',
                'doce',
                'trece',
                'catorce',
                'quince',
                'dieciseis',
                'diecisiete',
                'dieciocho',
                'diecinueve'
            ];
            const cienes = [
                '',
                'uno',
                'dos',
                'tres',
                'cuatro',
                'cinco',
                'seis',
                'sete',
                'ocho',
                'nove',
                'diez',
                'once',
                'doce',
                'trece',
                'catorce',
                'quince',
                'dieciseis',
                'diecisiete',
                'dieciocho',
                'diecinueve'
            ];
            const tens = [
                '',
                '',
                'veinte',
                'treinta',
                'cuarenta',
                'cincuenta',
                'sesenta',
                'setenta',
                'ochenta',
                'noventa',
            ];
            const millones = [
                '',
                'un millon',
                'dos millones',
                'tres millones',
                'cuatro millones',
                'cinco millones',
                'siete millones',
                'siete millones',
                'ocho millones',
                'nueve millones',
            ];
            const complementos = [
                '',
                '',
                'veinti',
                'treinta y ',
                'cuarenta y ',
                'cincuenta y ',
                'sesenta y ',
                'setenta y ',
                'ochenta y ',
                'noventa y ',
            ];

            str += numberString[0] !== '0' ? ones[parseInt(numberString[0])] + 'hundred ' : '';

            if (parseInt(numberString[1] + numberString[2]) < 20 && parseInt(numberString[1] + numberString[2]) > 9) {
                str += ones[parseInt(numberString[1] + numberString[2])] + 'crore ';
            } else {
                str += numberString[1] !== '0' ? tens[parseInt(numberString[1])] + ' ' : '';
                str += numberString[2] !== '0' ? ones[parseInt(numberString[2])] + 'crore ' : '';
                str += numberString[1] !== '0' && numberString[2] === '0' ? 'crore ' : '';
            }

            if (parseInt(numberString[3] + numberString[4]) < 20 && parseInt(numberString[3] + numberString[4]) > 9) {
                str += millones[parseInt(numberString[3])] + ' ';
                str += numberString[4] !== '0'
                    ? numberString[4] === '1' && numberString[5] === '0' && numberString[6] === '0'
                        ? 'cien mil'
                        : numberString[4] === '1' && numberString[5] === '0' && numberString[6] === '1'
                            ? 'ciento un'
                            : numberString[4] === '1'
                                ? 'ciento '
                                : numberString[4] !== '0' && numberString[5] === '0' && numberString[6] === '0'
                                    ? ones[parseInt(numberString[4])] + 'cientos mil '
                                    : ones[parseInt(numberString[4])] + 'cientos '
                    : '';
                str += numberString[3] !== '0' && numberString[4] === '0' ? '' : '';
            } else {
                str += numberString[3] !== '0' ? `${millones[parseInt(numberString[3])]} ` : '';
                str += numberString[4] !== '0'
                    ? numberString[4] === '1' && numberString[5] === '0' && numberString[6] === '0'
                        ? 'cien mil'
                        : numberString[4] === '1' && numberString[5] === '0' && numberString[6] === '1'
                            ? 'ciento'
                            : numberString[4] === '1'
                                ? 'ciento '
                                : numberString[4] !== '0' && numberString[5] === '0' && numberString[6] === '0'
                                    ? ones[parseInt(numberString[4])] + 'cientos mil '
                                    : `${ones[parseInt(numberString[4])]}cientos `
                    : '';
                str += numberString[3] !== '0' && numberString[4] === '0' ? '' : '';
            }

            if (parseInt(numberString[5] + numberString[6]) < 20 && parseInt(numberString[5] + numberString[6]) > 9) {
                str += ones[parseInt(numberString[5] + numberString[6])] + 'mil ';
            } else {
                str +=
                    numberString[5] !== '0'
                        ? complementos[parseInt(numberString[5])] + onesMiles[parseInt(numberString[6])]
                        : '';
                str +=
                    numberString[6] !== '0'
                        ? numberString[6] === '0'
                            ? 'mil '
                            : numberString[5] === '0'
                                ? numberString[3] === '0' && numberString[4] === '0' && numberString[5] === '0'
                                    ? numberString[6] !== '1'
                                        ? onesMilesPlus[parseInt(numberString[6])] + ' mil '
                                        : onesMilesPlus[parseInt(numberString[6])] + 'mil '
                                    : ' ' + onesMiles[parseInt(numberString[6])] + 'mil '
                                : ''
                        : '';
                str += numberString[5] !== '0' && numberString[6] === '0' ? 'mil ' : numberString[5] === '0' ? '' : 'mil ';
            }

            str +=
                numberString[7] !== '0'
                    ? numberString[7] === '1' && numberString[8] === '0' && numberString[9] === '0'
                        ? 'cien'
                        : numberString[7] === '1'
                            ? 'ciento '
                            : numberString[7] === '5'
                                ? 'quinientos '
                                : cienes[parseInt(numberString[7])] + 'cientos '
                    : '';

            if (parseInt(numberString[8] + numberString[9]) < 20 && parseInt(numberString[8] + numberString[9]) > 9) {
                str += ones[parseInt(numberString[8] + numberString[9])];
            } else {
                str += numberString[8] !== '0'
                    ? numberString[9] === '0'
                        ? tens[parseInt(numberString[8])]
                        : complementos[parseInt(numberString[8])]
                    : '';
                str += numberString[9] !== '0' ? ones[parseInt(numberString[9])] : '';
            }
            break;

        default:
            str += 'Formato no aceptado';
    }
    return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
}


module.exports = generateDocument;
