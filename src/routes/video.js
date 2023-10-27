import VideoController from "../controllers/VideoController.js"

async function VideoRoutes(server) {
    server.post('/videos', VideoController.store)
    server.get('/', VideoController.index)
    server.delete('/videos/:id', VideoController.delete)
    server.get('/videos/:id', VideoController.show)
    server.put('/videos/:id', VideoController.update)
}

export default VideoRoutes

