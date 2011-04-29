/**
 * @author mr.doob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Plane.as
 *
 *
    var PI2 = Math.PI * 2;    
 */

//var TextBox = function (aOfer ) {


//  var greetings = aOfer;




var Textbox = function(greetings) {
  this.greetings = greetings || {};
  this.content = this.greetings.content || [];  
};

Textbox.prototype.long_story = function() {
  
  var long_story = "";
  for (var i = this.content.length - 1; i >= 0; i--){
    long_story += this.content[i];
  };
  return long_story;
}
       


Textbox.prototype.set_positions =  function() {
    //SET TEXTBOX POSITION
    for ( var j = 0; j < greetings.length; j ++ ) {

      //var resolution = 8;
      //var amplitude = 100 + ( j * ( Math.random() * 200 + 10 ) );
      //var size = 360 / resolution;

      //var rand = Math.random() * Math.PI * 2;
      greetings[j].position =  new THREE.Vector3( );

      greetings[j].position.x =  greetings[j].ab_x * (-2) ;
      greetings[j].position.y = greetings[j].y * (42);
      greetings[j].position.z = 0;//Math.sin( rand ) * amplitude ;
      if(greetings[j].id == "23")
      {
        greetings[j].position.x = 0;
        greetings[j].position.y = 0;
        greetings[j].position.z = 0;

      }
    }
  }




















Textbox.prototype.to_scene_add_textboxes = function(scene)
  {
    for ( var j = 0; j < greetings.length; j ++ ) {


      var x=greetings[j].position.x;
      var y=greetings[j].position.y;
      var z=greetings[j].position.z;
      var str=greetings[j].content;
      var size=str.length;

      var t_particle= createText(str, size, x, y, z); 


      ////particle = new THREE.Particle( textMaterial );

      //TRY TO USE EXISTING POSITIONS:
      ////particle.position = greetings[j].position;


      //atlast: draw textbox!
      //scene.addObject( particle );
      //   particle.position.z = Math.sin( rand ) * amplitude;
      ////particle.scale.z = particle.scale.x= particle.scale.y = 0.5;
      ////

      scene.addObject( t_particle ); //ADD TEXTBOX


    }  //for


    //LINES:      CONNECT TEXTBOXES

    Textbox.prototype.to_scene_do_draw_lines_between_textboxes = function(scene) {
      var    str_p='draw line from parent:'+ greetings[j].id;
      for(var k=j+1; k<greetings.length & j<greetings.length-1;k++)
      {
        if(greetings[j].id == greetings[k].parent_id)
        {
          var str_c = 'to child:' + greetings[k].id;
          console.log(str_p + str_c);


          geometry = new THREE.Geometry();

          geometry.vertices.push( new THREE.Vertex( greetings[j].position ) );
          geometry.vertices.push( new THREE.Vertex( greetings[k].position ) );
          var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );

          line.scale.z = line.scale.x= line.scale.y = 1.0; 


          scene.addObject( line ); //ADD LINE
        }//if



      }//for k 

    }//for j


  }




  Textbox.prototype.createText = function(string, size, x, y, z) {


    string = x.toString()+"," +y.toString() +" " + string;
    var canvas = document.createElement( 'canvas' );
    canvas.width = size*19;
    canvas.height = 85;
    canvas.needsUpdate = true;

    var context = canvas.getContext( '2d' );
    context.font = 14+"px Georgia";
    context.fillStyle = "rgb(255, 255, 255)";
    context.textAlign = "center";
    context.fillText( string, canvas.width / 2, 25 );



    var texture = new THREE.Texture( canvas );
    texture.needsUpdate = true;
    var textMaterial = new THREE.ParticleBasicMaterial( { map: texture, blending: THREE.AdditiveBlending } );

    particle = new THREE.Particle( textMaterial );
    particle.position.y = y;
    particle.position.x = x;
    particle.position.z = z;

    return particle;
  }


//}

//TextBox.prototype = new THREE.Geometry();
//TextBox.prototype.constructor = TextBox;

