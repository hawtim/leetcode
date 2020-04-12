var BST = require('../数据结构/二叉树.js')

var wordsBst = new BST()

var str = `Aliquip excepteur labore excepteur tempor fugiat commodo dolor. Ad elit voluptate sint commodo fugiat reprehenderit. Esse aliqua mollit culpa sunt incididunt esse ut magna.

Cupidatat velit aliquip cupidatat id culpa. Laborum est officia sit enim amet incididunt sit sit deserunt do velit. Fugiat culpa velit labore irure nulla ea non magna sint elit minim. Voluptate officia velit laboris do cupidatat tempor commodo in nulla. Veniam dolore cupidatat duis quis ipsum ipsum do commodo deserunt sint adipisicing. Exercitation anim in ut laboris deserunt irure do. Excepteur commodo sit incididunt laborum officia nisi do.

Ullamco nostrud cupidatat reprehenderit ipsum in id minim. Consectetur cupidatat ad non adipisicing deserunt do officia ad voluptate et ad. Exercitation magna nulla eu aute non incididunt exercitation. Ut commodo mollit in officia. Incididunt elit incididunt sunt occaecat ea elit. Sit cillum deserunt adipisicing eu sit exercitation.

Sint est do eiusmod enim consectetur aute elit labore. Do incididunt velit cupidatat ipsum. Officia laboris id ut dolore enim nisi aliqua voluptate. Sunt voluptate eu eu commodo quis commodo consectetur occaecat. Magna cillum laborum sint irure pariatur minim duis ex Lorem velit ullamco commodo deserunt et.

Anim veniam laboris dolor Lorem elit incididunt dolor est. Ea labore eiusmod duis enim enim eiusmod nulla mollit aliqua mollit in. Nulla fugiat ad et minim occaecat nostrud magna ad fugiat ullamco consectetur tempor. Fugiat magna ex minim pariatur eu non culpa consequat ut laborum culpa irure cupidatat do.

Commodo ut voluptate ea velit. Culpa ipsum aliqua enim laboris officia amet sit Lorem ipsum nisi esse. Ea velit incididunt deserunt aute esse est est adipisicing velit adipisicing occaecat ullamco sunt reprehenderit.`

var words = str.replace(/\./gim, '').split(' ')

for (var i = 0; i < words.length; ++ i) {
  var w = words[i]
  var word = wordsBst.find(w)
  if (word == null) {
    wordsBst.insert(w)
  } else {
    wordsBst.update(w)
  }
}

wordsBst.inOrder(wordsBst.root)
