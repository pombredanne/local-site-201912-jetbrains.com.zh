import dispatcher from 'utils/dispatcher';
import CodeMirror from 'codemirror';
import InteractiveSlogan from 'components/interactive-slogan';
import $ from 'jquery';

CodeMirror.commands.selectCompletionItem = function(editor) {
  const wait = InteractiveSlogan.wait;
  const completion = editor.state.completionActive;
  const completionView = completion.widget;

  function setActive(index, delay) {
    completionView.changeActive(index);
    return wait(delay);
  }

  editor.__movie.pause();

  wait(200)
    .then(() => setActive(0, 500))
    .then(() => setActive(1, 500))
    .then(() => {
      editor.__movie.toggle();
    });
};

CodeMirror.commands.markError = function(editor) {
  const content = editor.getValue();
  const from = { line: 0, ch: content.length - 3 };
  const to = { line: 0, ch: content.length };
  editor.__movieMarker = editor.markText(from, to, {
    className: 'marked marked-error'
  });
};

CodeMirror.commands.selectText = function(editor) {
  const from = editor.getCursor();
  editor.setSelection(from, { line: from.line, ch: from.ch - 'IDE'.length });
};

dispatcher.domReady(() => {
  const sloganSelector = $('.js-interactive-slogan-scenario');
  if (sloganSelector.length === 0) {
    return;
  } else {
    const slogan = new InteractiveSlogan('.js-interactive-slogan-scenario', {
      completionItems: ['Ruby', 'Ruby on Rails']
    });
    window.editor = slogan.editor;
  }
});
