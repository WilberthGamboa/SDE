class TrieNode  {
    public children: Record<string, TrieNode>;
    public isEndOfWord: boolean;
  
      constructor(){
          this.children = {}
           this.isEndOfWord = false;
      }
  }
  
  class Trie {
      private root;
      constructor() {
          this.root = new TrieNode()
          
      }
  
      insert(word: string): void {
          let node = this.root;
          for (const char of word) {
              if (!node.children[char]) {
                  node.children[char] = new TrieNode();  // Crea nuevo nodo si el carácter no existe
              }
              node = node.children[char];  // Avanza al siguiente nodo
          }
          node.isEndOfWord = true;  // Marca el final de la palabra
          
      }
  
      search(word: string): boolean {
          let node = this.root;
          for (const char of word) {
              if (!node.children[char]) {
                   return false;  // Crea nuevo nodo si el carácter no existe
              }
              node = node.children[char];  // Avanza al siguiente nodo
          }
          if(node.isEndOfWord===false){
              return false
          }
  
          return true
          
      }
  
      startsWith(prefix: string): boolean {
  
  
           let node = this.root;
          for (const char of prefix) {
              if (!node.children[char]) {
                   return false;  // Crea nuevo nodo si el carácter no existe
              }
              node = node.children[char];  // Avanza al siguiente nodo
          }
      
          return true
          
      }
  }