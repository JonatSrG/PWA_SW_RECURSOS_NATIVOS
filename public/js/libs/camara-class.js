
class Camra {
    
    constructor(videoNode) {

        this.videoNode = videoNode;
        console.log('Camara Class init');

    } 

    encender() {

        navigator.mediaDevices.getUserMedia(
            {
                audio: false,
            video: {
                width: 300, height:300
            }
            }
        ).then(
            stream => {
                this.videoNode.srcObject = stream;
                this.stream = stream;
            }
        );
    }

    apagar() {

        this.videoNode.pause();
        if( this.stream ) {

            this.stream.getTracks()[0].stop();

        }
    
    }

    tomarFoto() {

        let canvas = Document.createElement('canvas');

        //dimensiones 
        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 300);

        //obtener contexto canvas
        let context = canvas.getContext('2d');//simple image
        
        context.drawImage( this.videoNode, 0 , 0, canvas.width, canvas.height);

        this.foto = context.canvas.toDataURL();

        //limpieza
        canvas = null;
        context = null;

        return this.foto;
        
    }
}