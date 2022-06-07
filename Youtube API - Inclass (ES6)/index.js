const API="AIzaSyBN-LGLeT7-Uga-0Nn8YZVhxH94T3sWwR0";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=moon%20knight&key=[YOUR_API_KEY]



let search = async () =>{
    let q=document.getElementById("query").value;
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${API}`;
    try{
        let there = await fetch(url);
        let find = await there.json();
        document.getElementById("container").innerHTML=null;
        // console.log(find.items);
        append(find.items);
    }
    catch(err){
        console.log(err);
    }
}

// iframe is an html tag for videos
let append = (data) =>{
    let container=document.getElementById("container");
    data.forEach(({id: {videoId}, snippet:{title, description, channelTitle, thumbnails:{default:{url}}}}) =>{
        let dubba=document.createElement("div");
        dubba.setAttribute("id", "dubba");

        let channel = document.createElement("h3");
        channel.innerText=channelTitle;

        let image = document.createElement("img");
        image.src=url;

        let image_dubba=document.createElement("div");
        image_dubba.append(image);
        

        let para=document.createElement("p");
        para.innerText=title;

        let details = document.createElement("div");
        details.append(para, channel);

        dubba.addEventListener("click", function(){
            addToStorage(videoId, title, description, channelTitle);
        })
        // console.log(videoId);
        // console.log(title);
        // console.log(thumbnails);
        dubba.append(image_dubba, details);

        container.append(dubba);
    })
}



function addToStorage(id, title, description, channelname){
    localStorage.removeItem("playData");
    let arr=[];
    arr.push(id, title, description, channelname);
    localStorage.setItem("playData", JSON.stringify(arr));
    window.location.href="play.html";
    // console.log(arr);
}




async function mostPopular(){
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&regionCode=in&key=${API}`;
    try{
        let there = await fetch(url);
        let data = await there.json();
        console.log(data.items);
        append(data.items);
    }
    catch(err){
        console.log(err);
    }
}


mostPopular();
// <iframe width="560" height="315" 
// src="https://www.youtube.com/embed/bpHtxx_wmqw" 
// title="YouTube video player" 
// frameborder="0" 
// allow="accelerometer; autoplay; clipboard-write; 
// encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
// </iframe>








// etag: "BOREO_F3y4nYgHra2dqfVX_W83Y"
// id: {kind: 'youtube#video', videoId: 'sFTD5vBfRGY'}
// kind: "youtube#searchResult"
// snippet:
// channelId: "UCah9jr4Ehlrt4Wv-q-CgJkg"
// channelTitle: "IndiaMarvel"
// description: "मैं सुनाता हूं कहानी एक स्पेस सिपाही की, थॉर ओडिनसन... देखिए मार्वल ..."
// liveBroadcastContent: "none"
// publishTime: "2022-05-24T03:16:09Z"
// publishedAt: "2022-05-24T03:16:09Z"
// default: {url: 'https://i.ytimg.com/vi/sFTD5vBfRGY/default.jpg', width: 120, height: 90}
// high: {url: 'https://i.ytimg.com/vi/sFTD5vBfRGY/hqdefault.jpg', width: 480, height: 360}
// medium: {url: 'https://i.ytimg.com/vi/sFTD5vBfRGY/mqdefault.jpg', width: 320, height: 180}
// title: "Marvel Studios&#39; Thor: Love and Thunder | Official Hindi Trailer | In Cinemas 8 July 2022"




// etag: "Hz407pGEliRUmsRfYgma6cMUNq4"
// id: {kind: 'youtube#video', videoId: 'MTqwFu6Wuh8'}
// kind: "youtube#searchResult"
// snippet:
// channelId: "UCF1JIbMUs6uqoZEY1Haw0GQ"
// channelTitle: "Shemaroo"
// description: "\"Daata Full Movie is a 1989 Indian feature film directed by Sultan Ahmed, starring Mithun Chakraborty, Shammi Kapoor, Padmini ..."
// liveBroadcastContent: "none"
// publishTime: "2016-04-29T10:11:54Z"
// publishedAt: "2016-04-29T10:11:54Z"
// thumbnails: {default: {…}, medium: {…}, high: {…}}
// title: "Daata {HD}- Mithun Chakraborty, Shammi Kapoor, Padmini Kolhapure - Hindi Movie-(With Eng Subtitles)"