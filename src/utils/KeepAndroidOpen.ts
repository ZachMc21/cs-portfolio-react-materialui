function KeepAndroidOpenScript() {
    console.log("Running KAO helper");

    let kao_script = document.createElement("script");
    kao_script.id = "kao-script";
    kao_script.src = "https://keepandroidopen.org/banner.js?size=mini&animation=off&id=keep-android-open";
    kao_script.async = true;
    //kao_script.type = "text/javascript";

    let container = document.getElementById("keep-android-open");
    container?.appendChild(kao_script);
    console.log(container);

    if(document.getElementById("kao-script")) {
        console.log("KAO helper successful");
    }
}

export default KeepAndroidOpenScript;