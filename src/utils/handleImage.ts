// TODO: Add some more function for handling images sending from server

/**
 * 
    [x] Add function that handle image sending from server. Add it into slideshow whose images are being
    show at the moment.
 */

export const handleImageUpload = (ev: any, callbackFunction?: (str: string) => void) =>{
    const files = ev.target.files;

    let file = files[0];

    let reader: FileReader = new FileReader();

    reader.onload = function(){
        let base64String: string = reader.result as string;
        base64String = base64String.replace("data:", "").replace(/^.*,/, "");
        callbackFunction && callbackFunction(base64String);
        // console.log(base64String);
    }

    file && reader.readAsDataURL(file);
    // console.log(reader);
}
