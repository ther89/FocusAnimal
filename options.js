var imgURL = chrome.extension.getURL('images/dog.jpg');
document.getElementById('img_dog').src = imgURL;

var imgURL = chrome.extension.getURL('images/cat.jpg');
document.getElementById('img_cat').src = imgURL;

var imgURL = chrome.extension.getURL('images/owl.jpg');
document.getElementById('img_owl').src = imgURL;

focusanimal = {};

focusanimal.save_options = function() {
    var el_entries = document.getElementById('focusanimal_allowed_urls');
    var entries = el_entries.value;
    var enabled = document.getElementById('focusanimal_enabled').checked;
    //var imageFileName = document.getElementById('focusanimal_image').value;
    var imageFileName = document.querySelector('input[name="focusanimal_image"]:checked').value;

    chrome.storage.local.set({ 
        focusanimal_ALLOWED_URLS: entries.split('\n'),
        focusanimal_ENABLED: enabled,
        focusanimal_IMAGE: imageFileName,
    }, function(){
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
        status.textContent = '';
        }, 3000);
    });
};

focusanimal.load_options = function() {
    chrome.storage.local.get({
        focusanimal_ALLOWED_URLS: '',
        focusanimal_ENABLED: false,
        focusanimal_IMAGE: 'dog.jpg',
    }, function (result) {
		//alert(JSON.stringify(result));
        document.getElementById('focusanimal_allowed_urls').value = result.focusanimal_ALLOWED_URLS.join('\n');
        document.getElementById('focusanimal_enabled').checked = result.focusanimal_ENABLED;
        //document.getElementById('focusanimal_image').value = result.focusanimal_IMAGE;
        var selected = document.querySelector('input[name="focusanimal_image"][value="'+ result.focusanimal_IMAGE  +'"]').checked = true;
    });
};

document.addEventListener('DOMContentLoaded', focusanimal.load_options);
document.getElementById('options_button').addEventListener('click', focusanimal.save_options);