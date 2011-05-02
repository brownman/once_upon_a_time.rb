



var TextBox = function(user) {     
  //this.random_position = false;
   this.random_position = false;
  this.text_color = "rgb(255, 255, 255)";   
  this.user = user || {};
  this.stat = this.user.stat || [];  
};
/*
 *
 *TextBox.prototype.long_story = function() {
 *
 *  var long_story = "";
 *  for (var i = this.stat.length - 1; i >= 0; i--){
 *    long_story += this.stat[i];
 *  };
 *  return long_story;
 *}
 *
 */

    //var resolution = 8;
    //var amplitude = 100 + ( j * ( Math.random() * 200 + 10 ) );
    //var size = 360 / resolution;

    //var rand = Math.random() * Math.PI * 2;
    // user[j].position =  new THREE.Vector3( );
/*
 *    
 *TextBox.prototype.set_position =  function() {
 *  var user = this.user;
 *  //SET TEXTBOX POSITION
 *  for ( var j = 0; j < user.length; j ++ ) {
 *
 *  if(!this.random_position) 
 *  {
 *  
 *    user[j].position_x =  
 *      user[j].ab_x * this.factor_x  ;
 *    user[j].position_y = 
 *    user[j].y * this.factor_y ;
 *    user[j].position_z = 
 *     0;              
 *  }
 *  else
 *  {
 *  
 *    user[j].position_x =  
 *Math.random() * 4000 - 2000;
 *    user[j].position_y = 
 *
 *Math.random() * 4000 - 2000;
 *    user[j].position_z = 
 *
 *Math.random() * 4000 - 2000;
 *  }
 *    if(user[j].id == "23")
 *    {
 *      user[j].position_x = 0;
 *      user[j].position_y = 0;
 *      user[j].position_z = 0;
 *
 *    }
 *  }
 *}
 *
 *
 */












TextBox.prototype.draw_all = function(scene)
{
   console.log(textboxes);
//  textboxes.set_position();  
  //add some textboxes
  textboxes.draw_user(scene);
 // textboxes.draw_line_between_textbox(scene);       
}





TextBox.prototype.draw_user = function(scene)
{

  var user  =     this.user;
  for ( var j = 0; j < user.length; j ++ ) {


    var x=user[j].position_x;
    var y=user[j].position_y;
    var z=user[j].position_z;
    var str=user[j].stat;
    var size=str.length;

    var t_particle= this.createText(str, size, x, y, z); 


    scene.addObject( t_particle ); //ADD TEXTBOX


  }  //for
}


/*
 *
 * //LINES:      CONNECT TEXTBOXES
 *
 *TextBox.prototype.draw_line_between_textbox = function(scene) {
 *  
 *  
 *  var user  =     this.user;
 *  var geometry = null;//new THREE.Geometry(); 
 *  var linesMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } );
 *
 *
 *  for(var  j=0; j<user.length ; j++)
 *  {
 *    var    str_p='draw line from parent:'+ user[j].id;
 *
 *    for(var k=j+1; k<user.length & j<user.length-1;k++)
 *    {
 *      if(user[j].id == user[k].parent_id)
 *      {
 *        var str_c = 'to child:' + user[k].id;
 *        console.log(str_p + str_c);
 *
 *
 *        geometry = new THREE.Geometry();
 *
 *
 * var vec1=new THREE.Vector3
 *         (user[j].position_x,
 *          user[j].position_y,
 *          user[j].position_z);
 * var vec2=new THREE.Vector3
 *         (user[k].position_x,
 *          user[k].position_y,
 *          user[k].position_z);
 * 
 *
 *
 *  geometry.vertices.push( new THREE.Vertex( vec1 ) );
 *  geometry.vertices.push( new THREE.Vertex( vec2 ) );
 *
 *
 *
 *    
 * var line = new THREE.Line( geometry, linesMaterial);
 *        line.scale.z = line.scale.x= line.scale.y = 1.0;
 * //console.log("TEXTBOXES line.position"+ line.position);   
 *        scene.addObject( line ); //ADD LINE
 *      }//if
 *
 *
 *
 *    }//for k 
 *
 *  }//for j
 *
 *      
 *}//func
 */


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


TextBox.prototype.createText = function(string, size, x, y, z) {


  string = x.toString()+"," +y.toString() +" " + string;
  var canvas = document.createElement( 'canvas' );
  canvas.width = size*19;
  canvas.height = 85;
  canvas.needsUpdate = true;

  var context = canvas.getContext( '2d' );
  context.font = 51+"px Georgia";
  context.fillStyle = this.text_color;

  context.textAlign = "center";
  context.fillText( string, canvas.width / 2, 25 );



  var texture = new THREE.Texture( canvas );

  texture.needsUpdate = true;
  var textMaterial = new THREE.ParticleBasicMaterial( { map: texture, blending: THREE.NormalBlending } );

  particle = new THREE.Particle( textMaterial );
  particle.position.y = y;
  particle.position.x = x;
  particle.position.z = z;

  return particle;
}

/*
 *
 *TextBox.prototype.draw_mesh = function(scene)
 *{
 *                 var geometry = new THREE.Cylinder( 3, 10, 0.1, 100 );
 *                var material = new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading } );
 *
 *                target = new THREE.Mesh( new THREE.Sphere( 100, 20, 20 ), material );
 *                scene.addObject( target );
 *
 *                for ( var i = 0; i < 1000; i ++ ) {
 *
 *                    var mesh = new THREE.Mesh( geometry, material );
 *                    mesh.position.x = Math.random() * 4000 - 2000;
 *                    mesh.position.y = Math.random() * 4000 - 2000;
 *                    mesh.position.z = Math.random() * 4000 - 2000;
 *
 *                    mesh.scale.x = mesh.scale.y = mesh.scale.z = 1;//Math.random() * 4 + 2;
 *               //     scene.addObject( mesh );
 *
 *                }    
 *}
 */
//}
                    
                   // t_particle.scale.x = t_particle.scale.y = t_particle.scale.z = 10;//Math.random() * 4 + 2;
    ////particle = new THREE.Particle( textMaterial );
 
//TextBox.prototype = new THREE.Geometry();
//TextBox.prototype.constructor = TextBox;
                       
    
    //new THREE.LineColorMaterial( 0x000000, 0.2 );
            
            
                    
