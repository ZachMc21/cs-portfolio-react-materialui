
// Source - https://stackoverflow.com/a/53396827
// Posted by Florian
// Retrieved 2026-05-07, License - CC BY-SA 4.0

function mountKaoScript() {
  const script = document.createElement("script");
  script.id = "kao-script";
  script.src = "https://keepandroidopen.org/banner.js?size=mini&animation=off?id=keep-android-open";
  script.async = true;

  let parent = document.getElementById("keep-android-open");
  parent!.appendChild(script);
};

export default mountKaoScript;