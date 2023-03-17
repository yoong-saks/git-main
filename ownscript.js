    // 2. 이 코드는 Iframe Player API를 비동기적으로 로드한다. !!필수!!
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '800',  //변경가능-영상 높이
        width: '1000',  //변경가능-영상 너비
        videoId: 'IUT1qAhMY4w',  //변경-영상ID
        playerVars: {
            'rel': 0,    //연관동영상 표시여부(0:표시안함)
           },
        events: {
        'onReady': onPlayerReady, //onReady 상태일 때 작동하는 function이름
        'onStateChange': onPlayerStateChange //onStateChange 상태일 때 작동하는 function이름
        }
    });
    }

    // 4. API는 비디오 플레이어가 준비되면 아래의 function을 불러올 것이다.
    function onPlayerReady(event) {
    event.target.playVideo();
    }
    // 5. API는 플레이어의 상태가 변화될 때 아래의 function을 불러올 것이다.
    //    이 function은 비디오가 재생되고 있을 때를 가르킨다.(state=1),
    //    플레이어는 6초 이상 재생되고 정지되어야 한다.
   
    var done = false;
    function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
    
    }
    function stopVideo() {
    player.stopVideo();
    }