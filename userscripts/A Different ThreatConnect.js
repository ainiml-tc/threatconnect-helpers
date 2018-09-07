// ==UserScript==
// @name    A Different ThreatConnect
// @namespace   ThreatConnect Research
// @version 0.2
// @description Think differently, together.
// @icon    https://image.flaticon.com/icons/png/128/478/478543.png
// @authur  Eric Jaw
// @match   *://*.208.52.161.205/*
// @match   *://*.threatconnect.com/*
// @include *://*.threatconnect.com/*
// @grant   none
// @run-at  document-end
// ==/UserScript==



(function () {
    'use strict';

    function LoadUI() {

        function Body() { }
        function Header() { }
        function Footer() { }

        function Posts() { }
        function Analyze() { }
        function Playbooks() {
            // Makes working with playbooks a little easier

            function active_execution_link() {
                // This will make the HttpLink Trigger clickable

                // TODO: make it so it'll re-read the page whenever elements changes
                // (e.g. when a playbook is activated)
                let url = document.URL;
                let playbook_mutex = 'playbook';
                let active_playbook = "Playbook editing is disabled when status is 'Active'. Playbook executes on URL: ";

                if (document.URL.indexOf(playbook_mutex) > -1) {

                    console.debug('Found active playbook:', url);

                    // check if page has execution url
                    if (document.documentElement.innerText.indexOf(active_playbook) > -1) {
                        // get execution url
                        let url_regex = new RegExp(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/);
                        let message_class = 'ui-message-detail';
                        let message = document.getElementsByClassName(message_class);
                        let message_text = message[0].innerText;
                        let message_html = message[0].innerHTML;
                        let message_url = message_text.match(url_regex)[0];

                        // make new message
                        let new_message_html = active_playbook + '<a target="_blank" href="' + message_url + '">' + message_url + '</a></br>';

                        // replace old message
                        document.getElementsByClassName(message_class)[0].innerHTML = new_message_html;

                    };
                };
            };

            active_execution_link();
        };

        function Browse() { }
        function Spaces() { }
        function Create() { }
        function Import() { }
        function Profile() { }


        // Run the functions
        Body();
        Header();
        Footer();

        Posts();
        Analyze();
        Playbooks();

        Browse();
        Spaces();
        Create();
        Import();
        Profile();
    };

    LoadUI();
    document.addEventListener('load', LoadUI);


})();
