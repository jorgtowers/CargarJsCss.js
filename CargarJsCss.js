function Cargar()
{
	this.Archivos={JSs:"",CSSs:"",ICOs:""};
    this.Rutas={JSs:"",CSSs:"",ICOs:""};
	this.JSs=function(){
		var jss = this.Archivos.JSs.split(',');
		for (var i = 0; i < jss.length; i++) {
                document.write("<script src=\""+this.Rutas.JSs+ jss[i] + "\" type=\"text\/javascript\"><\/script>");
            }   
		};
	this.CSSs=function(){
		var csss = this.Archivos.CSSs.split(',');
            for (var i = 0; i < csss.length; i++) {
                document.write("<" + "link href=\""+this.Rutas.CSSs+csss[i] + "\" type=\"text\/css\" rel=\"stylesheet\"/>");    
			}
		};
	this.ICOs=function(){
		var icos = this.Archivos.ICOs.split(',');
            for (var i = 0; i < icos.length; i++) {
                document.write("<" + "link href=\""+this.Rutas.ICOs+ icos[i] + "\" rel=\"shortcut icon\"/>");
            }      
		};
}


