



var Textbox = function(greetings) {     
  //THREE = THREE;
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



Textbox.prototype.set_position =  function() {
  var greetings = this.greetings;
  //SET TEXTBOX POSITION
  for ( var j = 0; j < greetings.length; j ++ ) {

    //var resolution = 8;
    //var amplitude = 100 + ( j * ( Math.random() * 200 + 10 ) );
    //var size = 360 / resolution;

    //var rand = Math.random() * Math.PI * 2;
    // greetings[j].position =  new THREE.Vector3( );

    greetings[j].position_x =  
    Math.random() * 4000 - 2000;
      //greetings[j].ab_x * (-200) ;
    greetings[j].position_y = 
    Math.random() * 4000 - 2000;
    //greetings[j].y * (420);
//    .position_z = 0;//Math.sin( rand ) * amplitude ;
    greetings[j].position_z = 

    Math.random() * 4000 - 2000;
    if(greetings[j].id == "23")
    {
      greetings[j].position_x = 0;
      greetings[j].position_y = 0;
      greetings[j].position_z = 0;

    }
  }
}




















Textbox.prototype.draw_textbox = function(scene)
{

  var greetings  =     this.greetings;
  for ( var j = 0; j < greetings.length; j ++ ) {


    var x=greetings[j].position_x;
    var y=greetings[j].position_y;
    var z=greetings[j].position_z;
    var str=greetings[j].content;
    var size=str.length;

    var t_particle= this.createText(str, size, x, y, z); 


                    t_particle.scale.x = t_particle.scale.y = t_particle.scale.z = 10;//Math.random() * 4 + 2;
    ////particle = new THREE.Particle( textMaterial );

    scene.addObject( t_particle ); //ADD TEXTBOX


  }  //for
}

//LINES:      CONNECT TEXTBOXES

Textbox.prototype.draw_line_between_textbox = function(scene) {
            var geometry = new THREE.Geometry(); 
  var linesMaterial = 
    
    //new THREE.LineColorMaterial( 0x000000, 0.2 );
            
            

      new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } );
  var line = new THREE.Line( geometry, linesMaterial
      );
  var greetings  =     this.greetings;
  for(var  j=0; j<greetings.length ; j++)
  {
    var    str_p='draw line from parent:'+ greetings[j].id;

    for(var k=j+1; k<greetings.length & j<greetings.length-1;k++)
    {
      if(greetings[j].id == greetings[k].parent_id)
      {
        var str_c = 'to child:' + greetings[k].id;
        console.log(str_p + str_c);


        geometry = new THREE.Geometry();


 var vec1=new THREE.Vector3
         (greetings[j].position_x,
          greetings[j].position_y,
          greetings[j].position_z);
 var vec2=new THREE.Vector3
         (greetings[k].position_x,
          greetings[k].position_y,
          greetings[k].position_z);
 


  geometry.vertices.push( new THREE.Vertex( vec1 ) );
  geometry.vertices.push( new THREE.Vertex( vec2 ) );

        line.scale.z = line.scale.x= line.scale.y = 1.0; 


console.log("TEXTBOXES line.position"+ line.position);   
        scene.addObject( line ); //ADD LINE
      }//if



    }//for k 

  }//for j

      
}//func
/*
 *
 *function shit()
 *{
 * 
 *   var geometry = new THREE.Geometry();
 *  geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( - 500, 0, 0 ) ) );
 *  geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 500, 0, 0 ) ) );
 *
 *
 *  var linesMaterial = new THREE.LineColorMaterial( 0x000000, 0.2 );
 *
 *  for ( var i = 0; i <= 20; i ++ ) {
 *
 *    var line = new THREE.Line( geometry, linesMaterial );
 *    line.position.z = ( i * 50 ) - 500;
 *    scene.addObject( line );
 *
 *console.log(" line.position"+ line.position);   
 *    var line = new THREE.Line( geometry, linesMaterial );
 *    line.position.x = ( i * 50 ) - 500;
 *    line.rotation.y = 90 * Math.PI / 180;
 *    scene.addObject( line );
 *
 *console.log(" line.position"+ line.position);   
 *  } 
 *}
 */


Textbox.prototype.createText = function(string, size, x, y, z) {


  string = x.toString()+"," +y.toString() +" " + string;
  var canvas = document.createElement( 'canvas' );
  canvas.width = size*190;
  canvas.height = 850;
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


Textbox.prototype.draw_mesh = function(scene)
{
                 var geometry = new THREE.Cylinder( 3, 10, 0.1, 100 );
                var material = new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading } );

                target = new THREE.Mesh( new THREE.Sphere( 100, 20, 20 ), material );
                scene.addObject( target );

                for ( var i = 0; i < 1000; i ++ ) {

                    var mesh = new THREE.Mesh( geometry, material );
                    mesh.position.x = Math.random() * 4000 - 2000;
                    mesh.position.y = Math.random() * 4000 - 2000;
                    
                    mesh.position.z = Math.random() * 4000 - 2000;

                    mesh.scale.x = mesh.scale.y = mesh.scale.z = 1;//Math.random() * 4 + 2;
               //     scene.addObject( mesh );

                }    
}
//}

//TextBox.prototype = new THREE.Geometry();
//TextBox.prototype.constructor = TextBox;

