'use strict';

//Search

/*$(document).ready(function(){
    $("#myinput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#users .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});
  */
//Cards for search

var options = {
  valueNames: [ 'name', 'date', 'sender' ],
  // Since there are no elements in the list, this will be used as template.
  item: '<div class="card"><div class="name pull"></div><div class="sender d--ib push"></div><div class="highlighted">by</div><div class="d--ib push"><span class="highlight">Created </span><span class="date"></span></div></div>',
  page: 3,
    pagination: {
      innerWindow: 5,
      left: 0,
      right: 0,
      paginationClass: "pagination",
    },
};

var values = [
  {
    name: 'Zračna luka Zagreb',
    date: 2016.,
    sender: 'Ivan Horvat'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2016.,
    sender: 'Ivan Horvat'
  },
  {
    name: 'Mup RH',
    date: 2018.,
    sender: 'Miro Mirović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2017.,
    sender: 'Ivan Ivanović'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2019.,
    sender: 'Ivo Ivić'
  },
  {
    name: 'Mup RH',
    date: 2015.,
    sender: 'Pero Perić'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2017.,
    sender: 'Ivan Horvat'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2019.,
    sender: 'Marko Marković'
  },
  {
    name: 'Mup RH',
    date: 2018.,
    sender: 'Miro Mirović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2014.,
    sender: 'Ivan Ivanović'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2016.,
    sender: 'Ivo Ivić'
  },
  {
    name: 'McDonalds',
    date: 2015,
    sender: 'Pero Perić'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2017,
    sender: 'Ivan Horvat'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2019,
    sender: 'Marko Marković'
  },
  {
    name: 'Mup RH',
    date: 2015,
    sender: 'Miro Mirović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2018,
    sender: 'Ivan Ivanović'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2016,
    sender: 'Ivo Ivić'
  },
  {
    name: 'McDonalds',
    date: 2014,
    sender: 'Pero Perić'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2017,
    sender: 'Ivan Horvat'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2015,
    sender: 'Marko Marković'
  },
  {
    name: 'Mup RH',
    date: 2018,
    sender: 'Miro Mirović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2019,
    sender: 'Ivan Ivanović'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2018,
    sender: 'Ivo Ivić'
  },
  {
    name: 'McDonalds',
    date: 2019,
    sender: 'Pero Perić'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2014,
    sender: 'Ivan Horvat'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2018,
    sender: 'Marko Marković'
  },
  {
    name: 'Mup RH',
    date: 2017,
    sender: 'Miro Mirović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2015,
    sender: 'Ivan Ivanović'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2017,
    sender: 'Ivo Ivić'
  },
  {
    name: 'McDonalds',
    date: 2019,
    sender: 'Pero Perić'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2014,
    sender: 'Ivan Horvat'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2018,
    sender: 'Marko Marković'
  },
  {
    name: 'Mup RH',
    date: 2015,
    sender: 'Miro Mirović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2019,
    sender: 'Javor Horvat'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2017,
    sender: 'Jadranka Stjepanić'
  },
  {
    name: 'McDonalds',
    date: 2018,
    sender: 'Marinela Jugovac'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2016,
    sender: 'Kristofor Jugovac'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2017,
    sender: 'Vlatka Ivanović'
  },
  {
    name: 'Mup RH',
    date: 2015,
    sender: 'Alojz Petrović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2014,
    sender: 'Dragica Kokot'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2019,
    sender: 'Terezija Kovačić'
  },
  {
    name: 'McDonalds',
    date: 2016,
    sender: 'Pavao Kovac'
  },{
    name: 'Zračna luka Zagreb',
    date: 2014,
    sender: 'Robert Bogdanić'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2015,
    sender: 'Danijela Vlahović'
  },
  {
    name: 'Mup RH',
    date: 2019,
    sender: 'Lazar Stojanović'
  },
  {
    name: 'Hrvatska pošta',
    date: 2016,
    sender: 'Mislav Vlašić'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2017,
    sender: 'Jurica Vinković'
  },
  {
    name: 'McDonalds',
    date: 2017,
    sender: 'Rajko Jurić'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2016,
    sender: 'Zlatica Dragović'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2019,
    sender: 'Kristijan Stojanović'
  },
  {
    name: 'Mup RH',
    date: 2018,
    sender: 'Bruno Broz'
  },
  {
    name: 'Hrvatska pošta',
    date: 2019,
    sender: 'Ana Mlakar'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2016,
    sender: 'Kruno Novak'
  },
  {
    name: 'McDonalds',
    date: 2017.,
    sender: 'Teo Stojanović'
  },
  {
    name: 'Zračna luka Zagreb',
    date: 2018,
    sender: 'Matej Adamić'
  },
  {
    name: 'Hrvatska radiotelevizija',
    date: 2017,
    sender: 'Edi Kovačić'
  },
  {
    name: 'Mup RH',
    date: 2016,
    sender: 'Dragana Vinković'
  },
  {
    name: 'Hrvatska pošta',
    date: 2019,
    sender: 'Marinka Perko'
  },
  {
    name: 'Hrvatski zavod za javno zdravstvo',
    date: 2018,
    sender: 'Henrik Petrić'
  },
  {
    name: 'McDonalds',
    date: 2017,
    sender: 'Ivan Grbić'
  },
];

var userList = new List('users', options, values);


//Pagination

var monkeyList = new List('test-list', {
    valueNames: ['card'],
    
});

