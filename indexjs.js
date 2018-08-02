window.onload = function () {
  new Vue({
    el: '#app',
    data: {
      currentSort:'name',
      currentSortDir:'asc',
      search: '',
      columns: ["Player","Team","Position"],
      pos:{'DT':'p20'
          ,'DL':'p20'
          ,'DE':'p21'
          ,'DB':'p21'
          ,'LB':'p22'
          ,'CB':'p23'
          ,'S':'p24'
          ,'QB':'p25'
          ,'RB':'p26'
          ,'WR':'p27'
          ,'TE':'p24'
          ,'C':'p25'
          ,'G':'p26'
          ,'T':'p27'
          ,'K':'p28'
          ,'H':'p29'
          ,'LS':'p30'
          ,'P':'p31'
          ,'KOS':'p32'
          ,'PR':'p33'
          ,'KR':'p34'
        },
      people:[],
      descs:[]
    },
    mounted () {
      this.people = window.options[0].players;
    },
    methods: {
      sort:function(s) {
        if(s === this.currentSort) {
          this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
        }
        this.currentSort = s;
      },
      getDesc:function(id){
        var notes='';
        axios.get('https://api.fantasy.nfl.com/v1/players/details?playerId='+id)
          .then(response => {
            try {
              for (var note in response.data.players[0].notes){
                notes = notes +'\n'+note+'--'+response.data.players[0].notes[note].body;
              }
              alert(notes);
            }
            catch(err) {
              return 'N/A';
            }
          });
      }
    },
    computed: {
      filteredlist:function()
      {
      	 var self=this;
         this.people = window.options[0].players;
         return this.people.filter(function(item){return item.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
      },
      sortedtable:function() {
        return this.filteredlist.sort((a,b) => {
          let modifier = 1;
          if(this.currentSortDir === 'desc') modifier = -1;
          if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        });
      }
    }
  })
};
