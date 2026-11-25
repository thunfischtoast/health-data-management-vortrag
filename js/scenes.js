/*
 * Step logic and slide furniture.
 *
 * A slide declares its number of clicks with data-steps="n". The script adds n
 * invisible reveal fragments, counts the visible ones and writes the result to
 * the section: data-step="2" (exact step) and data-reached="0 1 2" (every step
 * reached so far). All visual states are CSS rules on these two attributes.
 */
(function () {
  'use strict';

  var HEADER = ['Hospital data management in the age of AI', 'Christian Römer, November 2026'];

  function slides() {
    return Array.prototype.slice.call(document.querySelectorAll('.slides section:not(.stack)'));
  }

  function add(parent, tag, className, text) {
    var node = document.createElement(tag);
    node.className = className;
    if (text) { node.textContent = text; }
    parent.appendChild(node);
    return node;
  }

  function addImage(parent, className, src, alt) {
    var img = add(parent, 'img', className);
    img.src = src;
    img.alt = alt;
  }

  function addFragments(section) {
    var count = Number(section.dataset.steps || 0);
    for (var i = 0; i < count; i++) {
      add(section, 'span', 'fragment').dataset.fragmentIndex = i;
    }
  }

  function addFurniture(section, number) {
    if (section.classList.contains('blue')) { return; }
    var arc = document.createElement('div');
    arc.className = 'arc-small';
    addImage(arc, '', 'assets/ukm/arc_small_blue.svg', '');
    section.insertBefore(arc, section.firstChild);
    addImage(section, 'logo', 'assets/ukm/logo_blue.svg', 'UKM');
    var header = add(section, 'div', 'header');
    add(header, 'div', 'header-title', HEADER[0]);
    add(header, 'div', 'header-name', HEADER[1]);
    add(section, 'div', 'slide-no', String(number));
  }

  function setStep(section) {
    var step = section.querySelectorAll('.fragment.visible').length;
    var reached = [];
    for (var i = 0; i <= step; i++) { reached.push(i); }
    section.dataset.step = step;
    section.dataset.reached = reached.join(' ');
  }

  function setAllSteps() { slides().forEach(setStep); }

  function slideNumber(section) {
    var parent = section.parentNode;
    var position = Array.prototype.indexOf.call(parent.children, section) + 1;
    if (parent.classList.contains('slides')) { return position; }
    var prefix = parent.dataset.prefix;
    if (!prefix) { return 'B' + position; }
    // A main slide heads this stack and keeps its number; the optional slides below it
    // count with the stack's prefix.
    if (position === 1) { return slideNumber(parent); }
    return prefix + (position - 1);
  }

  slides().forEach(function (section) {
    addFragments(section);
    addFurniture(section, slideNumber(section));
    setStep(section);
  });

  Reveal.initialize({
    width: 1920,
    height: 1080,
    margin: 0,
    minScale: 0.1,
    maxScale: 4,
    center: false,
    hash: true,
    fragmentInURL: true,
    controls: false,
    progress: false,
    transition: 'fade',
    transitionSpeed: 'fast',
    backgroundTransition: 'fade',
    pdfSeparateFragments: true,
    pdfMaxPagesPerSlide: 1,
    plugins: [RevealNotes]
  });

  ['ready', 'slidechanged', 'fragmentshown', 'fragmenthidden', 'pdf-ready'].forEach(function (name) {
    Reveal.on(name, setAllSteps);
  });
})();
