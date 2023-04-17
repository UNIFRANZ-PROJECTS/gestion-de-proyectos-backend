const { response } = require('express');
const { ProjectSchema } = require('../models');

const getProjects = async (req, res = response) => {

    const project = await ProjectSchema.find()
        .populate({
            path: 'subjectIDs',
            populate: {
                path: 'teacherIds'
            },
        })
        .populate({
            path: 'studentIds',
            select: 'name lastName code email state',
            populate: [
                {
                    path: 'rol',
                    select: 'name id'
                },
                {
                    path: 'typeUser',
                    select: 'name id'
                },
                {
                    path: 'responsible',
                    select: 'name id'
                }
            ]
        })
        .populate('typeProyect')
        .populate('category');
    // .populate('responsible', 'name');
    res.json({
        ok: true,
        project
    });
}
const createProject = async (req, res = response) => {

    const Project = new ProjectSchema(req.body);

    try {
        Project.responsible = req.uid;
        const proyectoGuardado = await Project.save();
        const proyectoConReferencias = await ProjectSchema.findById(proyectoGuardado.id)
            .populate({
                path: 'subjectIDs',
                populate: {
                    path: 'teacherIds'
                }
            })
            .populate('studentIds');

        res.json({
            ok: true,
            project: proyectoConReferencias
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            errors: [{ msg: "Por favor hable con el administrador" }]
        });
    }
}

const updateProject = async (req, res = response) => {
    const projectId = req.params.id;

    try {
        console.log(req.body)

        const nuevoProyecto = {
            ...req.body
        }

        const proyectoActualizado = await ProjectSchema.findByIdAndUpdate(projectId, nuevoProyecto, { new: true },);
        const proyectoConReferencias = await ProjectSchema.findById(proyectoActualizado.id)
            .populate({
                path: 'subjectIDs',
                populate: {
                    path: 'teacherIds'
                }
            })
            .populate('studentIds');

        res.json({
            ok: true,
            project: proyectoConReferencias
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}
module.exports = {
    getProjects,
    createProject,
    updateProject,
}