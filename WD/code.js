
var songrun = false;
var count = 1;
var mod = 1;
var path = ["songs\\Just Go To Hell Dil.mp3", "songs\\Yalgaar.mp3", "songs\\Chhil Gaye Naina.mp3", "songs\\Jee Karda.mp3", "songs\\Mera Intkam Dekhegi.mp3","songs\\Senorita.mp3","songs\\Chedkhaniyaan.mp3","songs\\Ghungroo.mp3", "songs\\Udd Gaye.mp3", "songs\\Makhna.mp3", "songs\\Tum Saath Ho.mp3", "songs\\Mat Ja Re.mp3", "songs\\Rula Ke Gaya Ishq.mp3", "songs\\Maahi.mp3", "songs\\Jee Le Zaraa.mp3", "songs\\Tumhari Jagga.mp3", "songs\\Tera Ban Jaunga.mp3", "songs\\Pal.mp3", "songs\\Ve Maahi.mp3", "songs\\Hawa Banke.mp3"];

var sname = ["Just Go To Hell Dil", "Yalgaar", "Chhil Gaye Naina", "Jee Karda", "Mera Intkam Dekhegi","Senorita", "Chedkhaniyaan", "Ghungroo", "Udd Gaye", "Makhna", "Tum Saath Ho", "Mat Ja Re", "Rula Ke Gaya Ishq", "Maahi", "Jee Le Zaraa", "Tumhari Jagga", "Tera Ban Jaunga", "Pal", "Ve Maahi", "Hawa Banke"];

var sd = ["artist : Sunidhi Chauhan|Amit Trivedi Movie:  Dear Zindagi", "artist: CARRYMINATI album :Yaalgar", "Artist : kanika kapoor movie: NH10", "artist : Divya kumar movie: badlapur", "artist : Krishna Beuraa |Anand R Anand movie: Shaadi Mein Zaroor Aana","artist:farhan akhtar movie: zindagi naa milegi dobara", "artist : Shankar Ehsaan Loy movie: Bandish Bandits","artist : Arijit Singh, Shilpa | Vishal & Shekhar, Kumaar movie: WAR", "artist : RITVIZ album: BarcadiHouseparty","artist: Tanishk Bagchi, Yasser Desai, Asees Kaur Movie: Drive", "artist : ALKA YAGNIK and ARIJIT SINGH Movie : Tamasha", "artist : Ankit tiwari Movie: Tanu Weds Manu Returns", "artist :Stebin Ben, Sunny-Inder, Kumaar album: Zee Music Originals", "artist : Toshi & Sharib Sabri|Mohit Suri Movie : Raaz 2", "artist : vishal dadlani movie : taalash", "artist : Zack Knight", "artist : Tulsi Kumar, Akhil Sachdeva | Kumaar movie: Kabir singh", "artist: Arijit Singh|Shreya Ghoshal movie: Jalebi", "artist :  Arijit Singh | Tanishk Bagchi movie: kesari", "artist :Darshan Raval album: Indie Music Label"];

var bool = [];

for (var i=0; i<sd.length; i++)
	bool[i] = false;

var icon = ["images\\\\1.jpg", "images\\\\2.jpg", "images\\\\3.jpg", "images\\\\4.jpg", "images\\\\5.jpg", "images\\\\6.jpg", "images\\\\7.jpg", "images\\\\8.jpg", "images\\\\9.jpg", "images\\\\10.jpg", "images\\\\11.jpg", "images\\\\12.jpg", "images\\\\13.jpg", "images\\\\14.jpg", "images\\\\15.jpg", "images\\\\16.jpg", "images\\\\17.jpg", "images\\\\18.jpg", "images\\\\19.jpg", "images\\\\20.jpg"];

var mood = [["1", "2", "3", "4", "5"], ["6","7", "8", "9", "10"], ["11", "12", "13", "14", "15"], ["16", "17", "18", "19", "20"]];
var mmm = ["1.png", "1.png", "1.png", "1.png", "1.png", "2.png", "2.png", "2.png", "2.png", "2.png", "3.png", "3.png", "3.png", "3.png", "3.png", "4.png", "4.png", "4.png", "4.png", "4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.slice(1,3);
console.log(x);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.slice(1,3);
console.log(x);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime(){
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }