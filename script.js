function Table() {
  this.rows = [{}];
  this.cols = 0;

  this.add_col = function (hdr, dflt='-') {
    this.rows[0][this.cols] = hdr;
    for (var row in this.rows.slice(1)) {
        row++;
        this.rows[row][hdr] = dflt;
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
    name = o.id.slice(0, -15);
    var color_selection = document.createElement('div');
    color_selection.setAttribute('id', name.concat('-controls-color-tab'));
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
    document.documentElement.style.setProperty('--table-aux-pri-color', c_pal[2]);
    document.documentElement.style.setProperty('--table-aux-sec-color', c_pal[3]);
    document.documentElement.style.setProperty('--table-sec-lt-color', c_pal[4]);
    document.documentElement.style.setProperty('--table-sec-dk-color', c_pal[5]);
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

function alternatingRowsLayout(name) {
    var odd_rows = document.getElementsByClassName('table-row-odd');
    for (var i = 0; i < odd_rows.length; i++) {
        odd_rows[i].style.background = 'linear-gradient(to right, var(--table-sec-lt-color), var(--table-sec-dk-color))';
    }
}

function addTable(t, name) {
    var tables = document.getElementById('tables-container');
    // Create Table Top
    var t_top = document.createElement('div');
    t_top.setAttribute("id", name.concat('-controls'));
    t_top.setAttribute("class", 'table-controls');
    var t_top_search = document.createElement('form');
    t_top_search.setAttribute("id", name.concat('-controls-search'));
    t_top_search.setAttribute('class', 'table-controls-search');
    t_top_search.setAttribute('action', 'javascript:void(0);');
    t_top_search.setAttribute('onsubmit', 'addSelection();');
    var t_top_search_input = document.createElement('input');
    t_top_search_input.setAttribute('id', name.concat('-controls-search-input'));
    t_top_search_input.setAttribute('class', 'table-controls-search-input');
    t_top_search_input.setAttribute('type', 'text');
    t_top_search_input.setAttribute('autocomplete', 'off');
    t_top_search_input.setAttribute('placeholder', 'Search...');
    t_top_search.appendChild(t_top_search_input)
    var t_top_color = document.createElement('div');
    t_top_color.setAttribute('id', name.concat('-controls-color'));
    t_top_color.setAttribute('class', 'table-controls-color');
    t_top_color.setAttribute('onmouseenter', 'displayColors(this);');
    t_top_color.setAttribute('onmouseleave', 'hideColors();');
    var t_top_layout = document.createElement('div');
    t_top_layout.setAttribute('id', name.concat('-controls-layout'));
    t_top_layout.setAttribute('class', 'table-controls-layout');
    t_top_layout.setAttribute('onmouseenter', 'displayLayouts(this);');
    t_top_layout.setAttribute('onmouseleave', 'hideLayouts();');
    var t_top_edit = document.createElement('button');
    t_top_edit.setAttribute('id', name.concat('-controls-edit'));
    t_top_edit.setAttribute('class', 'table-controls-edit');
    var t_top_delete = document.createElement('button');
    t_top_delete.setAttribute('id', name.concat('-controls-delete'));
    t_top_delete.setAttribute('class', 'table-controls-delete');
    t_top.appendChild(t_top_delete);
    t_top.appendChild(t_top_edit);
    t_top.appendChild(t_top_layout);
    t_top.appendChild(t_top_color);
    t_top.appendChild(t_top_search);
    // Create Table
    var t_container = document.createElement('div');
    t_container.setAttribute('id', name.concat('-container'));
    t_container.setAttribute('class', 'table-container');
    var t_html = document.createElement('table');
    t_html.setAttribute('id', name);
    // Create Table Head
    var thead_html = document.createElement('thead');
    var tr_html = document.createElement('tr');
    for (var hdr in t.rows[0]) {
        var th_html = document.createElement('th');
        th_html.innerHTML = t.rows[0][hdr];
        tr_html.appendChild(th_html);
    }
    var th_html = document.createElement('th');
    th_html.innerHTML = 'Actions';
    tr_html.appendChild(th_html);
    thead_html.appendChild(tr_html);
    t_html.appendChild(thead_html);
    // Create Table Foot
    var tfoot_html = document.createElement('tfoot');
    var tr_html = document.createElement('tr');
    for (i = 0; i < t.cols; i++) {
        var td_html = document.createElement('td');
        td_html.setAttribute('id', name.concat('-footer-td-').concat(i.toString()));
        td_html.setAttribute('class', 'table-footer-td');
        tr_html.appendChild(td_html);
    }
    var td_html = document.createElement('td');
    tr_html.appendChild(td_html);
    tfoot_html.appendChild(tr_html);
    t_html.appendChild(tfoot_html);
    // Create Table Body
    var tbody_html = document.createElement('tbody');
    for (var row in t.rows.slice(1)) {
        row++;
        var tr_html = document.createElement('tr');
        if (row % 2 == 1) {
            tr_html.className += 'table-row-odd'
        }
        for (var cell in t.rows[row]) {
            var td_html = document.createElement('td');
            td_html.innerHTML = t.rows[row][cell];
            tr_html.appendChild(td_html);
        }
        var tr_edit_html = document.createElement('td');
        tr_html.appendChild(tr_edit_html);
        tbody_html.appendChild(tr_html);
    }
    t_html.appendChild(tbody_html);
    // Create Table Bottom
    var t_bottom = document.createElement('div');
    t_bottom.setAttribute('id', name.concat('-nav'));
    t_bottom.setAttribute('class', 'table-nav');
    var t_bottom_rpp = document.createElement('div');
    t_bottom_rpp.setAttribute('class', 'table-rpp');
    t_bottom_rpp.setAttribute('id', name.concat('-rpp'));
    var t_page_select = document.createElement('div');
    t_page_select.setAttribute('class', 'table-page_select');
    t_page_select.setAttribute('id', name.concat('-page-select'));
    t_bottom.appendChild(t_bottom_rpp);
    t_bottom.appendChild(t_page_select);
    
    t_container.appendChild(t_top);
    t_container.appendChild(t_html);
    t_container.appendChild(t_bottom);

    tables.appendChild(t_container);
}
// set col palletes:    lt       dk      aux-pri    aux-sec    sec-lt     sec-dk  
var cpal_sunset = ['#FF5540', '#EE3340', '#FF893F', '#000000', '#FF7060', '#EE5050'];
var cpal_berry = ['#CC2288', '#441188', '#BB22BB', '#000000', '#CC4499', '#4433AA'];
var cpal_sky = ['#3399DD', '#1177DD', '#0060C0', '#000000', '#44AAFF', '#2288EE'];
var cpal_ocean = ['#1060A0', '#005070', '#0090CC', '#00A0E0', '#1080C0', '#007090'];
var cpal_sea = ['#00BBA0', '#00ABC0', '#009BA0', '#000000', '#22D0BB', '#00BBEE'];
var cpal_jungle = ['#77BB77', '#448844', '#007700', '#000000', '#88CC88', '#509950'];
var cpal_night = ['#445566', '#223344', '#7090B0', '#80A0C0', '#607585', '#324354'];

var t = new Table();
t.add_col('Year');
t.add_col('Season');
t.add_col('Host');
t.add_col('City');
t.add_col('Continent');
t.add_row([2022, 'winter', 'China', 'Beijing', 'Asia']);
t.add_row([2020, 'summer', 'Japan', 'Tokyo', 'Asia']);
t.add_row([2018, 'winter', 'Korea', 'Pyeongchang', 'Asia']);
t.add_row([2016,'summer','Brazil','Rio de Janeiro', 'South America']);
t.add_row([2014, 'winter', 'Russia', 'Sochi', 'Europe']);
t.add_row([2012,'summer','United Kingdom','London', 'Europe']);
t.add_row([2010, 'winter', 'Canada', 'Vancouver', 'North America']);
t.add_row([2008, 'summer', 'China', 'Beijing', 'Asia']);
t.add_row([2006, 'winter', 'Italy', 'Torino', 'Europe']);
t.add_row([2004, 'summer', 'Greece', 'Athens', 'Europe']);
t.add_row([2002, 'winter', 'United States', 'Salt Lake City', 'North America']);
t.add_row([2000, 'summer', 'Australia', 'Sydney', 'Oceania']);
t.add_row([1998, 'winter', 'Japan', 'Nagano', 'Asia']);
t.add_row([1996, 'summer', 'United States', 'Atlanta', 'North America']);

addTable(t, 'olympics-table');
