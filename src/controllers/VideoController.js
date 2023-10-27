import Video from '../models/Video.js'

class VideoController {
    async store(req, res) {
        try {
            const { titulo, descricao } = req.body
            if (titulo.length < 3 || titulo.length > 30 && descricao.length < 10 || descricao.length > 100) {
                return res.status(400).send({'msg': 'Erro!! titulo e descrição invalido'})
            }
            const user = await Video.create({
                titulo,
                descricao
            })
            return res.status(200).send({'msg': 'Video criado!!', 'data': user})
        } catch (e) {
            return  res.status(500).send({'msg': e})
        }

    }

    async update(req, res) {
        const { id } = req.params
        const { titulo, descricao } = req.body
        if(!id) return res.status(400).send({'msg': 'ID invalido!!'})

        if (titulo.length < 3 || titulo.length > 30 && descricao.length < 10 || descricao.length > 100) {
            return res.status(400).send({'msg': 'Erro!! titulo e descrição invalido'})
        }

        const video = await Video.findByPk(id)

        if(!video) return res.status(400).send({'msg': 'Não existe esse video...'})

        const videoUpdate = await video.update(req.body)

        return res.status(200).send(videoUpdate)

    }

    async index(req, res) {
        try {
            const videos = await Video.findAll({
                attributes: ['id', 'titulo', 'descricao'],
            })
    
            if (!videos) {
                return res.status(400).send({'msg': 'Nenhum video...'})
            }
    
            return res.status(200).send(videos)
        } catch (e) {
            return  res.status(500).send({'msg': 'Erro interno do servidor!!'})

        }

    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const video = await Video.findByPk(id)
            if (!video) {
                return res.status(400).send({'msg': 'Não existe esse video...'})
            }
            await video.destroy()
            return res.status(200).send({'msg': 'Video excluido!'})
        } catch (e) {
            return  res.status(500).send({'msg': 'Erro interno do servidor!!'})
        }

    }

    async show(req, res) {
        try {
            const { id } = req.params
            const video = await Video.findByPk(id)
            if (!video) {
                return res.status(400).send({'msg': 'Não existe esse video...'})
            }
            return res.send(video)
        } catch (e) {
            return  res.status(500).send({'msg': 'Erro interno do servidor!!'})
        }
    }
}
export default new VideoController()

