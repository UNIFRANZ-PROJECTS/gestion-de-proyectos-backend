const fs = require('fs');
const { google } = require('googleapis');

class GoogleDriveService {
    constructor() {
        this.driveClient = this.createDriveClient();
    }
    createDriveClient() {
        const client = new google.auth.OAuth2(process.env.IDCLIENT, process.env.SECRETCLIENT, process.env.GOOGLE_DRIVE_REDIRECT_URI);

        client.setCredentials({ refresh_token: process.env.REFRESHTOKENDRIVE });

        return google.drive({
            version: 'v3',
            auth: client,
        });
    }

    createFolder(folderName) {
        return this.driveClient.files.create({
            resource: {
                name: folderName,
                mimeType: 'application/vnd.google-apps.folder',
            },
            fields: 'id, name',
        });
    }

    searchFolder(folderName) {
        return new Promise((resolve, reject) => {
            this.driveClient.files.list(
                {
                    q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}'`,
                    fields: 'files(id, name)',
                },
                (err, res) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(res.data.files ? res.data.files[0] : null);
                },
            );
        });
    }

    saveFile(fileName, fileStream, fileMimeType, folderId) {
        return this.driveClient.files.create({
            requestBody: {
                name: fileName,
                mimeType: fileMimeType,
                parents: folderId ? [folderId] : [],
            },
            media: {
                mimeType: fileMimeType,
                body: fileStream,
            },
        });
    }
    searchFile(fileId) {
        return this.driveClient.files.get({
            fileId: fileId,
            alt: 'media',
        });
    }
}

module.exports = { GoogleDriveService };
