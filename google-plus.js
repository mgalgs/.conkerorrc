/**
 * Google Plus mode for conkeror
 *
 * Mitchel Humpherys
 *
**/

in_module(null);

require("content-buffer.js");

define_keymap("google_plus_keymap", $display_name = "google-plus");

define_key(google_plus_keymap, "j", null, $fallthrough);
define_key(google_plus_keymap, "k", null, $fallthrough);

var google_plus_modality = {
    normal: google_plus_keymap
};

define_page_mode("google_plus_mode",
    $display_name = "Google Plus",
    $enable = function (buffer) {
        buffer.content_modalities.push(google_plus_modality);
    },
    $disable = function (buffer) {
        var i = buffer.content_modalities.indexOf(google_plus_modality);
        if (i > -1)
            buffer.content_modalities.splice(i, 1);
    });

let (re = build_url_regex($domain = "plus.google",
                          $path   = /.*/,
                          $allow_www = true)) {
    auto_mode_list.push([re, google_plus_mode]);
}

provide("google-plus");
