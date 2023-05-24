const login=()=>{
    const loginPromise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject("error in login")
            resolve("Resolved")

        }, 5000);
    })
    return loginPromise;
}
const fetchdata=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject("error in fetch data")
            resolve("Data has arrived")
        }, 1000)
    })
}
const getUserPhotos=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Photos have been resolved");
            // reject("Photos have been rejected");
        }, 1000)
    })
}
const getUserFriends=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Friend have been fetched")
        }, 1000);
    })
}
const showHomeFeed=(data)=>{
   
    console.log("Making home feed using data:: ", data)
}

// ------async-await ---- (santhetic sugar)

const buildingUI= async()=>{

    const logindata= await login();
    console.log("LoginData::", logindata);
    const datafromFetch= await fetchdata();
    console.log("Fetchdata:: ", datafromFetch);
    const photodata= await getUserPhotos();
    console.log("User photo data:: ", photodata);
    const frienddata= await getUserPhotos();
    console.log("Friend data:: ", frienddata);
    showHomeFeed(frienddata);
}

console.log("first");


buildingUI().catch((error)=>{
    console.log("Inside cache:: ", error);
});

console.log("Second")

//------Async and await with try-catch------

/*
const buildUI= async ()=> {
    try{
        const logindata= await login();
    console.log("LoginData::", logindata);
    const datafromFetch= await fetchdata();
    console.log("Fetchdata:: ", datafromFetch);
    const photodata= await getUserPhotos();
    console.log("User photo data:: ", photodata);
    const frienddata= await getUserPhotos();
    console.log("Friend data:: ", frienddata);
    showHomeFeed(frienddata);
    }
    catch(error){
        console.log("Inside cache:: ", error);

    }
}
buildUI();

*/


//-----Promise chaining-----

/*
login().then((logindata)=>{
    console.log("logindata:: ", logindata)
    return fetchdata();
})
.then((datafromfetch)=>{
    console.log("test:: ", datafromfetch)
    return getUserPhotos();
})
.then((userPhotos)=>{
    console.log("userPhoto data:: ", userPhotos);
    return getUserFriends();
})
.then((frienddata)=>{
    console.log("user friend data:: ", frienddata);
    showHomeFeed(frienddata);
})
.catch((error)=>{
    console.log(error)
})

*/