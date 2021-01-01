class TrieNode {
  children: TrieNode[] | null[];
  count: number = 0;
  constructor(public value: string, public wordEnd: number = 0) {
    this.children = [];
    for (var i = 0; i < 27; i++) this.children[i] = null;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode("");
  }

  insert(word: string) {
    let ptr: TrieNode | null = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const asciiToIndex = this.getCharIndex(char);
      if (ptr.children[asciiToIndex] == null) {
        const tempTrieNode = new TrieNode(char);
        ptr.children[asciiToIndex] = tempTrieNode;
        ptr.children[asciiToIndex].count++;
      }
      ptr = ptr.children[asciiToIndex];
    }
    ptr.wordEnd++;
  }

  search(word: string): boolean {
    let ptr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const asciiToIndex = this.getCharIndex(char);
      if (ptr.children[asciiToIndex] == null) {
        return false;
      }
      ptr = ptr.children[asciiToIndex];
    }
    return ptr.wordEnd > 0;
  }

  startsWith(word: string): boolean {
    let ptr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const asciiToIndex = this.getCharIndex(char);
      if (ptr.children[asciiToIndex] == null) {
        return false;
      }
      ptr = ptr.children[asciiToIndex];
    }
    return ptr.count > 0;
  }

  getCharIndex(char: string): number {
    return char.charCodeAt(0) - 96;
  }
}

const trie = new Trie();
// ["search","search","search","startsWith","startsWith","startsWith"]
// [["hell"],["helloa"],["hello"],["hell"],["helloa"],["hello"]]
// [false,true,true,true,true,true]
// [false,false,true,true,false,true]
trie.insert("hello");
console.log(`search hell: `, trie.search("hell"));
console.log(`search helloa: `, trie.search("helloa"));
console.log(`search hello: `, trie.search("hello"));
console.log(`startsWith hell: `, trie.startsWith("hell"));
console.log(`startsWith helloa: `, trie.startsWith("helloa"));
console.log(`startsWith helloa: `, trie.startsWith("hello"));
