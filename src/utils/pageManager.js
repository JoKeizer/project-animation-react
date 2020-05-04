import {settings} from "../settings/Settings";
// import Intro from "../Pages/Intro/Intro";


// export function isMobSize(){
//     return document.body.offsetWidth < settings;
// }


//util
export function getSizeType(){
   if(document.body.offsetWidth < 600){
            return settings.sizes.mob
    }
    else{
        return settings.sizes.web
    }
}

// //App
// const [sizeType, setSizeType] = useState(getSizeType());
//
// document.addEventListener('resize', ()=>{
//     setSizeType(getSizeType());
// });


// //ergens anders
// if(getSizeType() === settings.sizes.mob){
//
// }
