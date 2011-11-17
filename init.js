dumpln("setting up init...");


// the default page for new buffers.
homepage = "www.google.com";

require("gmail");

// load urls from the command line in new buffers instead
// of new windows.
url_remoting_fn = load_url_in_new_buffer;

// load download buffers in the background in the current
// window, instead of in new windows.
download_buffer_automatic_open_target = OPEN_NEW_BUFFER_BACKGROUND;

// save a keystroke when selecting a dom node by number.
// hints_auto_exit_delay = 500;
// hints_ambiguous_auto_exit_delay = 500;


// display properties of the current selected node during
// the hints interaction.
hints_display_url_panel = true;


// default directory for downloads and shell commands.
cwd = get_home_directory();
cwd.append("Downloads");


// automatically handle some mime types internally.
content_handlers.set("application/pdf", content_handler_save);


// external programs for handling various mime types.
external_content_handlers.set("application/pdf", "evince");
external_content_handlers.set("video/*", "gnome-terminal -e mplayer");


editor_shell_command = "emacsclient -a emacs";


// view source in your editor.
// view_source_use_external_editor = true;


// start Mozrepl server
//
user_pref('extensions.mozrepl.autoStart', true);
// if ('@hyperstruct.net/mozlab/mozrepl;1' in Cc) {
//   let mozrepl = Cc['@hyperstruct.net/mozlab/mozrepl;1']
//     .getService(Ci.nsIMozRepl);
//   if (! mozrepl.isActive())
//     mozrepl.start(4242);
// }

let (mozrepl_init = get_home_directory()) {
    mozrepl_init.appendRelativePath(".mozrepl-conkeror.js");
    session_pref('extensions.mozrepl.initUrl', make_uri(mozrepl_init).spec);
}
