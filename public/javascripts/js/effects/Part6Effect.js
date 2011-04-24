//file:///home/dao01/WEBGL/three.js/examples/canvas_lines.html

var Part6Effect = function ( camera, renderer ) {

  Effect.call( this );

  var geometry, cameraPath, cameraTargetPath, particle, line, material, material2, scene,
      
      greetings = aOfer;

  this.init = function () {





    cameraPath = { start: new THREE.Vector3( 500, 0, 500 ), end: new THREE.Vector3( 0, 200, 500 ), change: new THREE.Vector3() };
    cameraPath.change.sub( cameraPath.end, cameraPath.start );

    cameraTargetPath = { start: new THREE.Vector3( - 100, - 300, 0 ), end: new THREE.Vector3( 50, - 100, 0 ), change: new THREE.Vector3() };
    cameraTargetPath.change.sub( cameraTargetPath.end, cameraTargetPath.start );

    scene = new THREE.Scene();





    //MANY STARS

    material = new THREE.ParticleBasicMaterial( { map: ImageUtils.loadTexture( 'images/nova_particle.png' ), blending: THREE.AdditiveBlending } );
 
    for ( var i = 0; i < 1000; i ++ ) {

      particle = new THREE.Particle( material );
      particle.position.x = Math.random() * 4000 - 2000;
      particle.position.y = Math.random() * 4000 - 2000;
      particle.position.z = Math.random() * 4000 - 2000;
      particle.scale.x = particle.scale.y = Math.random() * Math.random() * 1;
      scene.addObject( particle );//ADD STAR
    }
  



//ONLY ONE SUN
    particle = new THREE.Particle( new THREE.ParticleBasicMaterial( { map: ImageUtils.loadTexture( 'images/sun.png' ), blending: THREE.AdditiveBlending } ) );
    scene.addObject( particle );            //ADD SUN





//NODES
//
//materials:
    material = new THREE.LineBasicMaterial( { color: 0x008080, opacity: 1, blending: THREE.AdditiveBlending } );
    material2 = new THREE.ParticleBasicMaterial( { map: ImageUtils.loadTexture( 'images/line_planet.png' ), blending: THREE.AdditiveBlending } );
     
//texts:
 //greetings.prototype.position=null;

//fred.salary=new Number(20000);
//var str1= (fred.salary).toString();    
//
 //     geometry = new THREE.Geometry();
                 /*
      for ( var i = 0; i <= resolution; i ++ ) {
      

  //alpha
        segment = ( i * size ) * Math.PI / 180;
        geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( Math.cos( segment ) * amplitude, 0, Math.sin( segment ) * amplitude ) ) );

      }
 
            
      line = new THREE.Line( geometry, material );
      scene.addObject( line );
                   */            
    for ( var j = 0; j < greetings.length; j ++ ) {

      var resolution = 8;
      var amplitude = 100 + ( j * ( Math.random() * 200 + 10 ) );
      var size = 360 / resolution;
                                
      var rand = Math.random() * Math.PI * 2;
      greetings[j].position =  new THREE.Vector3( );
      greetings[j].position.x = Math.cos( rand ) * amplitude ;
      greetings[j].position.y = Math.cos( rand ) * amplitude ;
      //i;//Math.cos( rand ) * amplitude ;
      greetings[j].position.z = Math.sin( rand ) * amplitude ;
    }

  
//GENERATE PARTICLES BY greetings text+positions
//particle = new THREE.Particle( material2 );


    //  particle.position.x = Math.cos( rand ) * amplitude;
    //  particle.position.z = Math.sin( rand ) * amplitude;
//particle.scale.x = particle.scale.y = 0.5;


 //atlast: draw textbox!
//scene.addObject( particle );
                                 
     for ( var j = 0; j < greetings.length; j ++ ) {

      var textMaterial = new THREE.ParticleBasicMaterial
        (
          {
              map: new THREE.Texture( 
          createTextImage( greetings[ j ].content ) ), blending: THREE.AdditiveBlending
              }
         );
      textMaterial.offset.y = 35;

      particle = new THREE.Particle( textMaterial );
                                                
        //TRY TO USE EXISTING POSITIONS:
      particle.position = greetings[j].position;
                                              
   //   particle.position.x = Math.cos( rand ) * amplitude;
   //    particle.position.y = 20 
//GENERATE PARTICLES BY greetings text+positions
//particle = new THREE.Particle( material2 );


    //  particle.position.x = Math.cos( rand ) * amplitude;
    //  particle.position.z = Math.sin( rand ) * amplitude;
//particle.scale.x = particle.scale.y = 0.5;


 //atlast: draw textbox!
//scene.addObject( particle );
                                 ;
   //   particle.position.z = Math.sin( rand ) * amplitude;
       particle.scale.z = particle.scale.x= particle.scale.y = 0.5;
scene.addObject( particle ); //ADD TEXTBOX

      


//LINES:      


      var    str_p='draw line from parent:'+ greetings[j].id;
            for(var k=j+1; k<greetings.length & j<greetings.length-1;k++)
              {
                if(greetings[j].id == greetings[k].parent_id)
                {
                  var str_c = 'to child:' + greetings[k].id;
                  console.log(str_p + str_c);


      //particle = new THREE.Particle( material2 );
        geometry = new THREE.Geometry();

                    geometry.vertices.push( new THREE.Vertex( greetings[j].position ) );
                    geometry.vertices.push( new THREE.Vertex( greetings[k].position ) );
                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );

//       line = new THREE.Line( geometry, material );
     line.scale.z = line.scale.x= line.scale.y = 1.0; 
     

scene.addObject( line ); //ADD LINE
                }//if

      
              
              }//for k 

    }//for j

    function createTextImage( string ) {

      var canvas = document.createElement( 'canvas' );
      canvas.width = 150;
      canvas.height = 85;
      canvas.loaded = true;

      var context = canvas.getContext( '2d' );
      context.font = "30px Georgia";
      context.fillStyle = "rgb(0, 255, 255)";
      context.textAlign = "center";
      context.fillText( string, canvas.width / 2, 25 );

      return canvas;
    }

  };//func

  this.update = function ( k ) {

    camera.position.copy( cameraPath.change );
    camera.position.multiplyScalar( k );
    camera.position.addSelf( cameraPath.start );

    camera.target.position.copy( cameraTargetPath.change );
    camera.target.position.multiplyScalar( k );
    camera.target.position.addSelf( cameraTargetPath.start );

    renderer.render( scene, camera );

  };

};


Part6Effect.prototype = new Effect();
Part6Effect.prototype.constructor = Part6Effect;
