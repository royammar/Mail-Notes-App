
export default class NoteMap extends React.Component {

   
    componentDidMount() {
        this.renderMap();
    }


    initMap = () => {
        let { lat, lng } = this.props.note.info;
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat, lng },
            zoom: 10
        });
     
        // google.maps.event.trigger(map, 'resize');
    }



    renderMap = () => {
        this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAig7ksAjASkE5RlOdU9D3laVy0XpAf3Bw&callback=initMap");
        window.initMap=this.initMap
      }
      

       loadScript=(url)=> {
        var index=window.document.getElementsByTagName("script")[0]
        console.log(index)
        var script=window.document.createElement("script")
        script.src=url
        script.async=true
        script.defer=true
        index.parentNode.insertBefore(script,index)
      }


        render() {
      
        return (

            <div className="map-container">
            <div id="map"></div>
            </div>
        )
        }
    }


