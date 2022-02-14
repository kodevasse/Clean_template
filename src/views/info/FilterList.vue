<script>
export default {
data: {
     typesearch: '',
     codesearch: '',
     processingmsg: 'waiting for you...',
     items: [
       {name: 'Stackoverflow', type: 'development', code: "one"},
       {name: 'Game of Thrones', type: 'serie', code: "two"},
       {name: 'Jon Snow', type: 'actor', code: "three"}
     ],
    filteredItems: [
       {name: 'Stackoverflow', type: 'development', code: "one"},
       {name: 'Game of Thrones', type: 'serie', code: "two"},
       {name: 'Jon Snow', type: 'actor', code: "three"}
     ]
  },

  // trigger filter on either input
  watch: {
    typesearch: function () {
      this.processingmsg = "processing type...";
      this.filteredItems = this.filterItems()
    },
    codesearch: function () {
      this.processingmsg = "processing code...";
      this.filteredItems = this.filterItems()
    }
  },

  // filter the list based on typesearch, then on codesearch               
  methods: {
    filterItems: function() {
      return this.items.filter(item => {
         return (
           (item.type.indexOf(this.typesearch.toLowerCase()) > -1)
         );
      }).filter(item => {
        return (item.code.indexOf(this.codesearch.toLowerCase()) > -1)
      })
    }
  }  
  }
</script>