import $ from 'jquery';
import dispatcher from 'utils/dispatcher';
import CodeMirror from 'codemirror';
import InteractiveSlogan from 'components/interactive-slogan';

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
    .then(() => setActive(0, 150))
    .then(() => setActive(1, 150))
    .then(() => setActive(2, 150))
    .then(() => setActive(3, 1000))
    .then(() => setActive(4, 100))
    .then(() => wait(700))
    .then(() => setActive(3, 100))
    .then(() => setActive(2, 100))
    .then(() => setActive(1, 100))
    .then(() => setActive(0, 100))
    .then(() => {
      completion.pick(completion.data, 0);
      editor.__movie.toggle();
    });
};

dispatcher.domReady(() => {
  const mountSelector = '.js-interactive-slogan-scenario';
  const $mountNode = $(mountSelector);
  if ($mountNode.length === 0) {
    return;
  }

  // eslint-disable-next-line no-unused-vars
  const slogan = new InteractiveSlogan($mountNode, {
    keywords: ['Capable', 'Ergonomic'],
    completionItems: ['Java', 'Groovy', 'Scala', 'Kotlin', 'Android']
  });
});
