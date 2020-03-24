$(function() {

  var c_4 = new Tone.Synth().toMaster();
  var c_s_4 = new Tone.Synth().toMaster();
  var d_4 = new Tone.Synth().toMaster();
  var d_s_4 = new Tone.Synth().toMaster();
  var e_4 = new Tone.Synth().toMaster();
  var f_4 = new Tone.Synth().toMaster();
  var f_s_4 = new Tone.Synth().toMaster();
  var g_4 = new Tone.Synth().toMaster();
  var g_s_4 = new Tone.Synth().toMaster();
  var a_4 = new Tone.Synth().toMaster();
  var a_s_4 = new Tone.Synth().toMaster();
  var b_4 = new Tone.Synth().toMaster();

  var c_5 = new Tone.Synth().toMaster();
  var c_s_5 = new Tone.Synth().toMaster();
  var d_5 = new Tone.Synth().toMaster();
  var d_s_5 = new Tone.Synth().toMaster();
  var e_5 = new Tone.Synth().toMaster();
  var f_5 = new Tone.Synth().toMaster();
  var f_s_5 = new Tone.Synth().toMaster();
  var g_5 = new Tone.Synth().toMaster();
  var g_s_5 = new Tone.Synth().toMaster();
  var a_5 = new Tone.Synth().toMaster();
  var a_s_5 = new Tone.Synth().toMaster();
  var b_5 = new Tone.Synth().toMaster();

  var c_6 = new Tone.Synth().toMaster();
  var c_s_6 = new Tone.Synth().toMaster();
  var d_6 = new Tone.Synth().toMaster();
  var d_s_6 = new Tone.Synth().toMaster();
  var e_6 = new Tone.Synth().toMaster();

  var c4 = 0;
  var cs4 = 0;
  var d4 = 0;
  var ds4 = 0;
  var e4 = 0;
  var f4 = 0;
  var fs4 = 0;
  var g4 = 0;
  var gs4 = 0;
  var a4 = 0;
  var as4 = 0;
  var b4 = 0;

  var c5 = 0;
  var cs5 = 0;
  var d5 = 0;
  var ds5 = 0;
  var e5 = 0;
  var f5 = 0;
  var fs5 = 0;
  var g5 = 0;
  var gs5 = 0;
  var a5 = 0;
  var as5 = 0;
  var b5 = 0;

  var c6 = 0;
  var cs6 = 0;
  var d6 = 0;
  var ds6 = 0;
  var e6 = 0;

  var i = 0;
  
  $("#switch").change(function() {
    if(i == 0){
      i = 1;
      console.log(i);
    }else if(i == 1){
      i = 0;
      console.log(i);
    }
  });

	document.onkeydown = 
    function keydown(e) {
      if (i == 1){
        if( c4==0 && e.keyCode=='81' ){ c4 =1;document.getElementById( "c_4" ).style.backgroundColor= "pink"; c_4.triggerAttackRelease('C4','4n');}
        if( cs4==0 && e.keyCode=='50' ){ cs4 =1;document.getElementById( "c_s_4" ).style.backgroundColor= "pink"; c_s_4.triggerAttackRelease('C#4','4n');}
        if( d4==0 && e.keyCode=='87' ) { d4 =1;document.getElementById( "d_4" ).style.backgroundColor= "pink"; d_4.triggerAttackRelease('D4','4n');}
        if( ds4==0 && e.keyCode=='51' ) { ds4 =1;document.getElementById( "d_s_4" ).style.backgroundColor= "pink"; d_s_4.triggerAttackRelease('D#4','4n');}
        if( e4==0 && e.keyCode=='69' ) { e4 =1;document.getElementById( "e_4" ).style.backgroundColor= "pink"; e_4.triggerAttackRelease('E4','4n');}
        if( f4==0 && e.keyCode=='82' ) { f4 =1;document.getElementById( "f_4" ).style.backgroundColor= "pink"; f_4.triggerAttackRelease('F4','4n');}
        if( fs4==0 && e.keyCode=='53' ) { fs4 =1;document.getElementById( "f_s_4" ).style.backgroundColor= "pink"; f_s_4.triggerAttackRelease('F#4','4n');}
        if( g4==0 && e.keyCode=='84' ) { g4 =1;document.getElementById( "g_4" ).style.backgroundColor= "pink"; g_4.triggerAttackRelease('G4','4n');}
        if( gs4==0 && e.keyCode=='54' ) { gs4 =1;document.getElementById( "g_s_4" ).style.backgroundColor= "pink"; g_s_4.triggerAttackRelease('G#4','4n');}
        if( a4==0 && e.keyCode=='89' ) { a4 =1;document.getElementById( "a_4" ).style.backgroundColor= "pink"; a_4.triggerAttackRelease('A4','4n');}
        if( as4==0 && e.keyCode=='55' ) { as4 =1;document.getElementById( "a_s_4" ).style.backgroundColor= "pink"; a_s_4.triggerAttackRelease('A#4','4n');}
        if( b4==0 && e.keyCode=='85' ) { b4 =1;document.getElementById( "b_4" ).style.backgroundColor= "pink"; b_4.triggerAttackRelease('B4','4n');}

        if( c5==0 && e.keyCode=='73' ){ c5 =1;document.getElementById( "c_5" ).style.backgroundColor= "pink"; c_5.triggerAttackRelease('C5','4n');}
        if( cs5==0 && e.keyCode=='57' ){ cs5 =1;document.getElementById( "c_s_5" ).style.backgroundColor= "pink"; c_s_5.triggerAttackRelease('C#5','4n');}
        if( d5==0 && e.keyCode=='79' ) { d5 =1;document.getElementById( "d_5" ).style.backgroundColor= "pink"; d_5.triggerAttackRelease('D5','4n');}
        if( ds5==0 && e.keyCode=='48' ) { ds5 =1;document.getElementById( "d_s_5" ).style.backgroundColor= "pink"; d_s_5.triggerAttackRelease('D#5','4n');}
        if( e5==0 && e.keyCode=='80' ) { e5 =1;document.getElementById( "e_5" ).style.backgroundColor= "pink"; e_5.triggerAttackRelease('E5','4n');}
        if( f5==0 && e.keyCode=='90' ) { f5 =1;document.getElementById( "f_5" ).style.backgroundColor= "pink"; f_5.triggerAttackRelease('F5','4n');}
        if( fs5==0 && e.keyCode=='83' ) { fs5 =1;document.getElementById( "f_s_5" ).style.backgroundColor= "pink"; f_s_5.triggerAttackRelease('F#5','4n');}
        if( g5==0 && e.keyCode=='88' ) { g5 =1;document.getElementById( "g_5" ).style.backgroundColor= "pink"; g_5.triggerAttackRelease('G5','4n');}
        if( gs5==0 && e.keyCode=='68' ) { gs5 =1;document.getElementById( "g_s_5" ).style.backgroundColor= "pink"; g_s_5.triggerAttackRelease('G#5','4n');}
        if( a5==0 && e.keyCode=='67' ) { a5 =1;document.getElementById( "a_5" ).style.backgroundColor= "pink"; a_5.triggerAttackRelease('A5','4n');}
        if( as5==0 && e.keyCode=='70' ) { as5 =1;document.getElementById( "a_s_5" ).style.backgroundColor= "pink"; a_s_5.triggerAttackRelease('A#5','4n');}
        if( b5==0 && e.keyCode=='86' ) { b5 =1;document.getElementById( "b_5" ).style.backgroundColor= "pink"; b_5.triggerAttackRelease('B5','4n');}

        if( c6==0 && e.keyCode=='66' ){ c6 =1;document.getElementById( "c_6" ).style.backgroundColor= "pink"; c_6.triggerAttackRelease('C6','4n');}
        if( cs6==0 && e.keyCode=='72' ){ cs6 =1;document.getElementById( "c_s_6" ).style.backgroundColor= "pink"; c_s_6.triggerAttackRelease('C#6','4n');}
        if( d6==0 && e.keyCode=='78' ) { d6 =1;document.getElementById( "d_6" ).style.backgroundColor= "pink"; d_6.triggerAttackRelease('D6','4n');}
        if( ds6==0 && e.keyCode=='74' ) { ds6 =1;document.getElementById( "d_s_6" ).style.backgroundColor= "pink"; d_s_6.triggerAttackRelease('D#6','4n');}
        if( e6==0 && e.keyCode=='77' ) { e6 =1;document.getElementById( "e_6" ).style.backgroundColor= "pink"; e_6.triggerAttackRelease('E6','4n');}
      }
    };

	document.onkeyup = 
	  function keyup(e) {
      if(e.keyCode== '81'){ c4 = 0; document.getElementById("c_4").style.backgroundColor="white"; }
      if(e.keyCode== '50'){ cs4 = 0; document.getElementById("c_s_4").style.backgroundColor="black"; }
      if (e.keyCode== '87'){ d4 = 0; document.getElementById("d_4").style.backgroundColor="white"; }
      if (e.keyCode== '51'){ ds4 = 0; document.getElementById("d_s_4").style.backgroundColor="black"; }
      if (e.keyCode== '69'){ e4 = 0; document.getElementById("e_4").style.backgroundColor="white"; }
      if (e.keyCode== '82'){ f4 = 0; document.getElementById("f_4").style.backgroundColor="white"; }
      if (e.keyCode== '53'){ fs4 = 0; document.getElementById("f_s_4").style.backgroundColor="black"; }
      if (e.keyCode== '84'){ g4 = 0; document.getElementById("g_4").style.backgroundColor="white"; }
      if (e.keyCode== '54'){ gs4 = 0; document.getElementById("g_s_4").style.backgroundColor="black"; }
      if (e.keyCode== '89'){ a4 = 0; document.getElementById("a_4").style.backgroundColor="white"; }
      if (e.keyCode== '55'){ as4 = 0; document.getElementById("a_s_4").style.backgroundColor="black"; }
      if (e.keyCode== '85'){ b4 = 0; document.getElementById("b_4").style.backgroundColor="white"; }

      if(e.keyCode== '73'){ c5 = 0; document.getElementById("c_5").style.backgroundColor="white"; }
      if(e.keyCode== '57'){ cs5 = 0; document.getElementById("c_s_5").style.backgroundColor="black"; }
      if(e.keyCode== '79'){ d5 = 0; document.getElementById("d_5").style.backgroundColor="white"; }
      if (e.keyCode== '48'){ ds5 = 0; document.getElementById("d_s_5").style.backgroundColor="black"; }
      if (e.keyCode== '80'){ e5 = 0; document.getElementById("e_5").style.backgroundColor="white"; }
      if (e.keyCode== '90'){ f5 = 0; document.getElementById("f_5").style.backgroundColor="white"; }
      if (e.keyCode== '83'){ fs5 = 0; document.getElementById("f_s_5").style.backgroundColor="black"; }
      if (e.keyCode== '88'){ g5 = 0; document.getElementById("g_5").style.backgroundColor="white"; }
      if (e.keyCode== '68'){ gs5 = 0; document.getElementById("g_s_5").style.backgroundColor="black"; }
      if (e.keyCode== '67'){ a5 = 0; document.getElementById("a_5").style.backgroundColor="white"; }
      if (e.keyCode== '70'){ as5 = 0; document.getElementById("a_s_5").style.backgroundColor="black"; }
      if (e.keyCode== '86'){ b5 = 0; document.getElementById("b_5").style.backgroundColor="white"; }

      if(e.keyCode== '66'){ c6 = 0; document.getElementById("c_6").style.backgroundColor="white"; }
      if(e.keyCode== '72'){ cs6 = 0; document.getElementById("c_s_6").style.backgroundColor="black"; }
      if (e.keyCode== '78'){ d6 = 0; document.getElementById("d_6").style.backgroundColor="white"; }
      if (e.keyCode== '74'){ ds6 = 0; document.getElementById("d_s_6").style.backgroundColor="black"; }
      if (e.keyCode== '77'){ e6 = 0; document.getElementById("e_6").style.backgroundColor="white"; }
    };

  //-----------------------------------------------------------------------------------------------------------------
  var synth = new Tone.Synth().toMaster();  //シンセの音を作成
  var sound_code = {                        //テキストと音のコード
    "ド": "C5",
    "レ": "D5",
    "ミ": "E5",
    "ファ": "F5",
    "ソ": "G5",
    "ラ": "A5",
    "シ": "B5",

//----------------
    "c4": "C4",
    "d4": "D4",
    "e4": "E4",
    "f4": "F4",
    "g4": "G4",
    "a4": "A4",
    "b4": "B4",

    "C4": "C#4",
    "D4": "D#4",
    "E4": "E#4",
    "F4": "F#4",
    "G4": "G#4",
    "A4": "A#4",
    "B4": "B#4",

//-----------------
    "c5": "C5",
    "d5": "D5",
    "e5": "E5",
    "f5": "F5",
    "g5": "G5",
    "a5": "A5",
    "b5": "B5",

    "C5": "C#5",
    "D5": "D#5",
    "E5": "E#5",
    "F5": "F#5",
    "G5": "G#5",
    "A5": "A#5",
    "B5": "B#5",

//------------------
    "c6": "C6",
    "d6": "D6",
    "e6": "E6",

    "C6": "C#6",
    "D6": "D#6",

    "-": null
  }

//---------------------------------------------------------------------------------------------------------------------
  function addMelody(time, note) {                  //音を出す処理 noteに音のコード,timeにはボタンが押されてからの時間が入っている
      synth.triggerAttackRelease(note, '8n', time);
      console.log(note);
  }

//-----------------------------------------------------------------------------------------------------
  document.getElementById("play").onclick = function() {
      var melody_score = [];                        //実際に鳴らす音を入れる配列
      var score = document.getElementById("score"); //score(ノード要素)取得する
      var score_text = score.value                  //scoreのテキストを入れる

      console.log(score_text);

      while (score_text.length > 0) {             //テキストの中身があれば繰り返す
        for(sound in sound_code){                 //sound_codeのsoundを１づつ参照する eachの様な処理
          if (score_text.indexOf(sound) == 0) {   //soundのキーをscore_textの頭から参照し、一致してる場合
            melody_score.push(sound_code[sound]); //melody_scoreにsoundの値を入れる
            break;
          }
        }
        score_text = score_text.slice(1);         //テキストの頭の1文字消す
      }

      console.log(melody_score);

        var melody = new Tone.Sequence(addMelody, melody_score).start();
        melody.loop = false;      //Sequenceのloopを切る
        Tone.Transport.start();   //再生
  }
});