focusanimal = {};

focusanimal.save_options = function() {
    var el_entries = document.getElementById('focusanimal_allowed_urls');
    var entries = el_entries.value;
    var enabled = document.getElementById('focusanimal_enabled').checked;

    chrome.storage.local.set({ 
        focusanimal_ALLOWED_URLS: entries.split('\n'),
        focusanimal_ENABLED: enabled,
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
    }, function (result) {
		//alert(JSON.stringify(result));
        document.getElementById('focusanimal_allowed_urls').value = result.focusanimal_ALLOWED_URLS.join('\n');
        document.getElementById('focusanimal_enabled').checked = result.focusanimal_ENABLED;
    });
};

document.addEventListener('DOMContentLoaded', focusanimal.load_options);
document.getElementById('options_button').addEventListener('click', focusanimal.save_options);