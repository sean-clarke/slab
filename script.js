function Table() {
  this.rows = [{}];
  this.cols = 0;
  
  this.add_col = function (hdr) {
    this.rows[0][this.cols] = hdr;
    for (var row in this.rows.slice(1)) {
        row++;
        this.rows[row][hdr] = '-';
    }
    this.cols += 1;
  }
  this.add_row = function (v) {
    nr = {};
    for (var hdr in this.rows[0]) {
      nr[this.rows[0][hdr]] = v[hdr];
    }
    this.rows.push(nr)
  }
}

var t1 = new Table();
t1.add_col('first');
t1.add_col('second');
t1.add_col('third');
t1.add_row(['1','2','3']);
t1.add_row(['a','b','c']);
t1.add_row(['primary','secondary','tertiary']);

var t2 = new Table();
t2.add_col('Year');
t2.add_col('Season');
t2.add_col('Host');
t2.add_col('City');
t2.add_col('Continent');
t2.add_row([2022, 'winter', 'China', 'Beijing', 'Asia']);
t2.add_row([2020, 'summer', 'Japan', 'Tokyo', 'Asia']);
t2.add_row([2018, 'winter', 'Korea', 'Pyeongchang', 'Asia']);
t2.add_row([2016,'summer','Brazil','Rio de Janeiro', 'South America']);
t2.add_row([2014, 'winter', 'Russia', 'Sochi', 'Europe']);
t2.add_row([2012,'summer','United Kingdom','London', 'Europe']);
t2.add_row([2010, 'winter', 'Canada', 'Vancouver', 'North America']);
t2.add_row([2008, 'summer', 'China', 'Beijing', 'Asia']);
t2.add_row([2006, 'winter', 'Italy', 'Torino', 'Europe']);
t2.add_row([2004, 'summer', 'Greece', 'Athens', 'Europe']);
t2.add_row([2002, 'winter', 'United States', 'Salt Lake City', 'North America']);
t2.add_row([2000, 'summer', 'Australia', 'Sydney', 'Oceania']);
t2.add_row([1998, 'winter', 'Japan', 'Nagano', 'Asia']);
t2.add_row([1996, 'summer', 'United States', 'Atlanta', 'North America']);

var t3 = new Table();

function addTable(t, name) {
    var tables = document.getElementById('tables-container');
    
    var t_top = document.createElement('div');
    t_top.setAttribute("id", name.concat('-controls'));
    t_top.setAttribute("class", 'table-controls');
    var t_top_search = document.createElement('form');
    t_top_search.setAttribute("id", name.concat('-search'));
    t_top_search.setAttribute('class', 'table-controls-search');
    var t_top_search_input = document.createElement('input');
    t_top_search_input.setAttribute('id', name.concat('-search-input'));
    t_top_search_input.setAttribute('class', 'table-controls-search-input');
    t_top_search_input.setAttribute('type', 'text');
    t_top_search.appendChild(t_top_search_input)
    var t_top_color = document.createElement('div');
    t_top_color.setAttribute('id', name.concat('-color'));
    t_top_color.setAttribute('class', 'table-controls-color');
    var t_top_layout = document.createElement('div');
    t_top_layout.setAttribute('id', name.concat('-layout'));
    t_top_layout.setAttribute('class', 'table-controls-layout');
    var t_top_edit = document.createElement('button');
    t_top_edit.setAttribute('id', name.concat('-edit'));
    t_top_edit.setAttribute('class', 'table-controls-edit');
    var t_top_delete = document.createElement('button');
    t_top_delete.setAttribute('id', name.concat('-delete'));
    t_top_delete.setAttribute('class', 'table-controls-delete');
    t_top.appendChild(t_top_delete);
    t_top.appendChild(t_top_edit);
    t_top.appendChild(t_top_layout);
    t_top.appendChild(t_top_color);
    t_top.appendChild(t_top_search);
    
    var t_container = document.createElement('div');
    t_container.setAttribute('id', name.concat('-container'));
    t_container.setAttribute('class', 'table-container');
    var t_html = document.createElement('table');
    t_html.setAttribute('id', name);
    var thead_html = document.createElement('thead');
    var tr_html = document.createElement('tr');
    for (var hdr in t.rows[0]) {
        var th_html = document.createElement('th');
        th_html.innerHTML = t.rows[0][hdr];
        tr_html.appendChild(th_html);
    }
    thead_html.appendChild(tr_html);
    t_html.appendChild(thead_html);
    var tbody_html = document.createElement('tbody');
    for (var row in t.rows.slice(1)) {
        row++;
        var tr_html = document.createElement('tr');
        for (var cell in t.rows[row]) {
            var td_html = document.createElement('td');
            td_html.innerHTML = t.rows[row][cell];
            tr_html.appendChild(td_html);
        }
        tbody_html.appendChild(tr_html);
    }
    t_html.appendChild(tbody_html);
    
    var t_bottom = document.createElement('div');
    t_bottom.setAttribute('id', name.concat('-nav'));
    
    t_container.appendChild(t_top);
    t_container.appendChild(t_html);
    t_container.appendChild(t_bottom);
    
    tables.appendChild(t_container);
}

addTable(t2, 't2');
