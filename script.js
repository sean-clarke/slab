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

function displayColors(o) {
  var color_selection = document.createElement('div');
  color_selection.setAttribute('class', 'table-controls-color-tab');
  o.appendChild(color_selection);
}

function hideColors() {
  var color_selections = document.getElementsByClassName('table-controls-color-tab');
  for (var c_select in color_selections) {
    color_selections[c_select].parentNode.removeChild(color_selections[c_select]);
    return
  }
}

function changeColors(c_pal) {
    document.documentElement.style.setProperty('--table-lt-color', c_pal[0]);
    document.documentElement.style.setProperty('--table-dk-color', c_pal[1]);
    document.documentElement.style.setProperty('--table-aux-color', c_pal[2]);
}

function displayLayouts(o) {
  var layout_selection = document.createElement('div');
  layout_selection.setAttribute('class', 'table-controls-layout-tab');
  o.appendChild(layout_selection);
}

function hideLayouts() {
  var layout_selections = document.getElementsByClassName('table-controls-layout-tab');
  for (var l_select in layout_selections) {
    layout_selections[l_select].parentNode.removeChild(layout_selections[l_select]);
    return
  }
}

function alternatingRowsLayout() {
    var rows = document.getElementsByTagName('tr');
    var skip = false;
    for (var row in rows) {
        skip = !skip;
        if (skip) {
            continue;
        }
        var cells = rows[row].getElementsByTagName('td');
        for (var cell in cells) {
            console.log(cell);
        }
    }
}

function addTable(t, name) {
    var tables = document.getElementById('tables-container');

    var t_top = document.createElement('div');
    t_top.setAttribute("id", name.concat('-controls'));
    t_top.setAttribute("class", 'table-controls');
    var t_top_search = document.createElement('form');
    t_top_search.setAttribute("id", name.concat('-search'));
    t_top_search.setAttribute('class', 'table-controls-search');
    t_top_search.setAttribute('action', 'javascript:void(0);');
    t_top_search.setAttribute('onsubmit', 'addSelection();');
    var t_top_search_input = document.createElement('input');
    t_top_search_input.setAttribute('id', name.concat('-search-input'));
    t_top_search_input.setAttribute('class', 'table-controls-search-input');
    t_top_search_input.setAttribute('type', 'text');
    t_top_search_input.setAttribute('autocomplete', 'off');
    t_top_search_input.setAttribute('placeholder', 'Search...');
    t_top_search.appendChild(t_top_search_input)
    var t_top_color = document.createElement('div');
    t_top_color.setAttribute('id', name.concat('-color'));
    t_top_color.setAttribute('class', 'table-controls-color');
    t_top_color.setAttribute('onmouseenter', 'displayColors(this);');
    t_top_color.setAttribute('onmouseleave', 'hideColors();');
    var t_top_layout = document.createElement('div');
    t_top_layout.setAttribute('id', name.concat('-layout'));
    t_top_layout.setAttribute('class', 'table-controls-layout');
    t_top_layout.setAttribute('onmouseenter', 'displayLayouts(this);');
    t_top_layout.setAttribute('onmouseleave', 'hideLayouts();');
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
    t_bottom.setAttribute('class', 'table-nav');
    var t_bottom_rpp = document.createElement('div');
    t_bottom_rpp.setAttribute('class', 'table-rpp');
    var t_page_select = document.createElement('div');
    t_page_select.setAttribute('class', 'table-page_select');
    t_bottom.appendChild(t_bottom_rpp);
    t_bottom.appendChild(t_page_select);

    t_container.appendChild(t_top);
    t_container.appendChild(t_html);
    t_container.appendChild(t_bottom);

    tables.appendChild(t_container);
}

var cpal_sunset = ['#FF5540', '#EE3340', '#FF893F'];
var cpal_berry = ['#CC2288', '#441188', '#BB22BB'];
var cpal_sky = ['#3399DD', '#1177DD', '#0060C0'];
var cpal_ocean = ['#10609A', '#005070', '#0090CC'];
var cpal_sea = ['#00BBA0', '#00ABC0', '#009BA0'];
var cpal_jungle = ['#77BB77', '#448844', '#007700'];
var cpal_night = ['#445566', '#223344', '#5580AD'];

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

addTable(t2, 't2');
