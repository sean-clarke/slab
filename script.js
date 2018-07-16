tables = [];

function Table(name) {
    this.name = name.replace(" ", "-").toLowerCase();
    this.rows = [{}];
    this.cols = 0;
    this.filters = [];
    tables.push(this);
    this.add_col = function (hdr, dflt='-') {
        if (hdr === undefined) {
            hdr = 'C'.concat(this.cols.toString());
        }
        this.rows[0][this.cols] = hdr;
        for (i = 1; i < this.rows.length; i++) {
            this.rows[i][hdr] = dflt;
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
    this.rmv_col = function (hdr) {
        
        var found = false;
        for (key in this.rows[0]) {
            if (found) {
                this.rows[0][key - 1] = this.rows[0][key];
                continue;
            }
            if (this.rows[0][key] == hdr) {
                found = true;
            }
        }
        if (found) {
            this.cols -= 1;
            delete this.rows[0][this.cols];
            for (i = 1; i < this.rows.length; i++) {
                delete this.rows[i][hdr];
            }
        }
    }
    this.rmv_row = function (r) {
        this.rows.splice(r, 1);
    }
    this.sort = function (hdr) {
        // pass
    }
    this.add_filter = function (filter_string) {
        // pass
    }
}

function newTablePopup() {
    var new_table_button = document.getElementById('new-table-button');
    var popups_container = document.getElementById('popups-container');
    var popup = document.createElement('div');
    popup.setAttribute('id', 'nt-popup');
    popups_container.appendChild(popup);
    new_table_button.style.display = 'none';
    popups_container.style.display = 'block';
}

function downloadTablePopup() {
    // pass
}

function deleteTablePopup(name) {
    var new_table_button = document.getElementById('new-table-button');
    var popups_container = document.getElementById('popups-container');
    var popup = document.createElement('div');
    popup.setAttribute('id', 'dt-popup');
    var popup_escape = document.createElement('button');
    popup_escape.setAttribute('class', 'dt-popup-escape');
    popup_escape.setAttribute('onclick', 'removePopup("dt");');
    var popup_header = document.createElement('div');
    popup_header.setAttribute('class', 'dt-popup-header');
    tname = name.replace('-', ' ');
    tname = tname.replace(/\w\S*/g, c => c.charAt(0).toUpperCase() + c.substr(1).toLowerCase());
    popup_header.innerHTML = 'Delete '.concat(tname).concat('?');
    var popup_body = document.createElement('div');
    popup_body.setAttribute('class', 'dt-popup-body');
    popup_body.innerHTML = 'Are you sure you want to delete this table? All data inside the table will be lost.';
    var popup_options = document.createElement('div');
    popup_options.setAttribute('class', 'dt-popup-options');
    var popup_continue = document.createElement('button');
    popup_continue.innerHTML = 'Proceed';
    popup_continue.setAttribute('class', 'dt-popup-continue');
    popup_continue.setAttribute('onclick', 'removeTable("'.concat(name).concat('");'));
    var popup_cancel = document.createElement('button');
    popup_cancel.setAttribute('class', 'dt-popup-cancel');
    popup_cancel.innerHTML = 'Cancel';
    popup_cancel.setAttribute('onclick', 'removePopup("dt");');
    popup_options.appendChild(popup_continue);
    popup_options.appendChild(popup_cancel);
    popup.appendChild(popup_escape);
    popup.appendChild(popup_header);
    popup.appendChild(popup_body);
    popup.appendChild(popup_options);
    popups_container.appendChild(popup);
    new_table_button.style.display = 'none';
    popups_container.style.display = 'block';
}

function displayColors(o) {
    name = o.id.slice(0, -15);
    var color_selection = document.createElement('div');
    color_selection.setAttribute('id', name.concat('-controls-color-tab'));
    color_selection.setAttribute('class', 'table-controls-color-tab');
    color_selection.style.display = 'grid';
    var color_selection_sky = document.createElement('button');
    color_selection_sky.setAttribute('id', name.concat('-controls-color-button-sky'));
    color_selection_sky.setAttribute('class', 'table-controls-color-button');
    color_selection_sky.setAttribute('onclick', 'changeColors("sky");');
    color_selection_sky.style.background = 'linear-gradient(to right, #3399DD, #1177DD)';
    var color_selection_sea = document.createElement('button');
    color_selection_sea.setAttribute('id', name.concat('-controls-color-button-sea'));
    color_selection_sea.setAttribute('class', 'table-controls-color-button');
    color_selection_sea.setAttribute('onclick', 'changeColors("sea");');
    color_selection_sea.style.background = 'linear-gradient(to right, #00BBA0, #00ABC0)';
    var color_selection_jungle = document.createElement('button');
    color_selection_jungle.setAttribute('id', name.concat('-controls-color-button-jungle'));
    color_selection_jungle.setAttribute('class', 'table-controls-color-button');
    color_selection_jungle.setAttribute('onclick', 'changeColors("jungle");');
    color_selection_jungle.style.background = 'linear-gradient(to right, #77BB77, #448844)';
    var color_selection_ocean = document.createElement('button');
    color_selection_ocean.setAttribute('id', name.concat('-controls-color-button-ocean'));
    color_selection_ocean.setAttribute('class', 'table-controls-color-button');
    color_selection_ocean.setAttribute('onclick', 'changeColors("ocean");');
    color_selection_ocean.style.background = 'linear-gradient(to right, #1060A0, #005070)';
    var color_selection_sunset = document.createElement('button');
    color_selection_sunset.setAttribute('id', name.concat('-controls-color-button-sunset'));
    color_selection_sunset.setAttribute('class', 'table-controls-color-button');
    color_selection_sunset.setAttribute('onclick', 'changeColors("sunset");');
    color_selection_sunset.style.background = 'linear-gradient(to right, #FF5540, #EE3340)';
    var color_selection_berry = document.createElement('button');
    color_selection_berry.setAttribute('id', name.concat('-controls-color-button-berry'));
    color_selection_berry.setAttribute('class', 'table-controls-color-button');
    color_selection_berry.setAttribute('onclick', 'changeColors("berry");');
    color_selection_berry.style.background = 'linear-gradient(to right, #CC2288, #441188)';
    var color_selection_night = document.createElement('button');
    color_selection_night.setAttribute('class', 'table-controls-color-button');
    color_selection_night.setAttribute('onclick', 'changeColors("night");');
    color_selection_night.style.background = 'linear-gradient(to right, #445566, #223344)';
    var color_selection_marble = document.createElement('button');
    color_selection_night.setAttribute('id', name.concat('-controls-color-button-night'));
    color_selection_marble.setAttribute('id', name.concat('-controls-color-button-marble'));
    color_selection_marble.setAttribute('class', 'table-controls-color-button');
    color_selection_marble.setAttribute('onclick', 'changeColors("marble");');
    color_selection_marble.style.background = 'linear-gradient(to right, white, #DDDDDD)';
    color_selection.appendChild(color_selection_sky);
    color_selection.appendChild(color_selection_sea);
    color_selection.appendChild(color_selection_jungle);
    color_selection.appendChild(color_selection_ocean);
    color_selection.appendChild(color_selection_sunset);
    color_selection.appendChild(color_selection_berry);
    color_selection.appendChild(color_selection_night);
    color_selection.appendChild(color_selection_marble);
    o.appendChild(color_selection);
}

function hideColors() {
    var color_selections = document.getElementsByClassName('table-controls-color-tab');
    for (var c_select in color_selections) {
        color_selections[c_select].parentNode.removeChild(color_selections[c_select]);
        return
    }
}

function changeColors(str) {
    // set col palletes:    lt       dk      aux-pri    aux-sec    sec-lt     sec-dk
    var cpal_marble = ['#E9E9E9', '#D5D5D5', '#EFEFEF', 'white', '#D9D9D9', '#C5C5C5'];
    var cpal_sunset = ['#FF5540', '#EE3340', '#F09030', '#F0A030', '#FF7060', '#EE5050'];
    var cpal_berry = ['#BB2288', '#441188', '#CC20CC', '#DD30DD', '#CC4499', '#4433AA'];
    var cpal_sky = ['#3399DD', '#1177DD', '#0575C5', '#0065C0', '#44AAFF', '#2288EE'];
    var cpal_ocean = ['#1060A0', '#005070', '#0090CC', '#00A0E0', '#1080C0', '#007090'];
    var cpal_sea = ['#00BBA0', '#00ABC0', '#009BA0', '#009090', '#22D0BB', '#00BBEE'];
    var cpal_jungle = ['#66BB66', '#448844', '#228822', '#117711', '#88CC88', '#509950'];
    var cpal_night = ['#445566', '#223344', '#7090B0', '#80A0C0', '#607585', '#324354'];
    document.documentElement.style.setProperty('--table-text-color', 'white');
    switch(str) {
        case 'night':
            c_pal = cpal_night;
            break;
        case 'ocean':
            c_pal = cpal_ocean;
            break;
        case 'sky':
            c_pal = cpal_sky;
            break;
        case 'berry':
            c_pal = cpal_berry;
            break;
        case 'sea':
            c_pal = cpal_sea;
            break;
        case 'sunset':
            c_pal = cpal_sunset;
            break;
        case 'jungle':
            c_pal = cpal_jungle;
            break;
        case 'marble':
            c_pal = cpal_marble;
            document.documentElement.style.setProperty('--table-text-color', '#555555');
            break;
    }
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
        return;
    }
}

function alternatingRowsLayout(name) {
    var odd_rows = document.getElementsByClassName('table-row-odd');
    for (var i = 0; i < odd_rows.length; i++) {
        odd_rows[i].style.background = 'linear-gradient(to right, var(--table-sec-lt-color), var(--table-sec-dk-color))';
    }
}

function buildTable(t) {
    name = t.name;
    var t_html = document.createElement('table');
    t_html.setAttribute('id', name);
    // Create Table Head
    var thead_html = document.createElement('thead');
    var tr_html = document.createElement('tr');
    for (var hdr in t.rows[0]) {
        var th_html = document.createElement('th');
        th_html.setAttribute('id', name.concat('-th-').concat(t.rows[0][hdr].replace(" ", "-").toLowerCase()));
        th_html.setAttribute('class', 'table-th');
        th_html.innerHTML = t.rows[0][hdr];
        tr_html.appendChild(th_html);
    }
    var th_html = document.createElement('th');
    var new_col_button_html = document.createElement('button');
    new_col_button_html.setAttribute('id', name.concat('-new-column-button'));
    new_col_button_html.setAttribute('class', 'table-new-column-button');
    new_col_button_html.setAttribute('onclick', 'addColumn(this.id.slice(0, -18));')
    th_html.appendChild(new_col_button_html);
    tr_html.appendChild(th_html);
    thead_html.appendChild(tr_html);
    t_html.appendChild(thead_html);
    // Create Table Foot
    var tfoot_html = document.createElement('tfoot');
    var tr_html = document.createElement('tr');
    //for (i = 0; i < t.cols; i++) {
    //    var td_html = document.createElement('td');
    //    td_html.setAttribute('id', name.concat('-footer-td-').concat(i.toString()));
    //    td_html.setAttribute('class', 'table-footer-td');
    //    tr_html.appendChild(td_html);
    //}
    var td_html = document.createElement('td');
    td_html.setAttribute('class', 'table-new-row-button-container');
    td_html.setAttribute('colspan', t.cols + 1);
    var t_nr_button = document.createElement('button');
    t_nr_button.setAttribute('id', name.concat('-new-row-button'));
    t_nr_button.setAttribute('class', 'table-new-row-button');
    t_nr_button.innerHTML = 'Add New Row';
    td_html.appendChild(t_nr_button);
    tr_html.appendChild(td_html);
    tfoot_html.appendChild(tr_html);
    t_html.appendChild(tfoot_html);
    // Create Table Body
    var tbody_html = document.createElement('tbody');
    for (i = 1; i < t.rows.length; i++) {
        var tr_html = document.createElement('tr');
        if (i % 2 == 1) {
            tr_html.className += 'table-row-odd'
        }
        for (var cell in t.rows[i]) {
            var td_html = document.createElement('td');
            td_html.setAttribute('class', 'table-data');
            td_html.innerHTML = t.rows[i][cell];
            tr_html.appendChild(td_html);
        }
        var tr_actions_html = document.createElement('td');
        tr_actions_html.setAttribute('class', 'table-row-actions');
        var tr_actions_button_html = document.createElement('button');
        tr_actions_button_html.setAttribute('id', name.concat('-row-').concat(i.toString()).concat('-actions-button'));
        tr_actions_button_html.setAttribute('class', 'table-row-actions-button');
        tr_actions_button_html.setAttribute('onclick', 'removeRow(this.id.split("-row-")[0], '.concat(i).concat(');'));
        tr_actions_html.appendChild(tr_actions_button_html);
        tr_html.appendChild(tr_actions_html);
        tbody_html.appendChild(tr_html);
    }
    t_html.appendChild(tbody_html);
    return t_html;
}

function addTable(t) {
    var tables = document.getElementById('tables-container');
    // Create Table Container
    name = t.name;
    var t_container = document.createElement('div');
    t_container.setAttribute('id', name.concat('-container'));
    t_container.setAttribute('class', 'table-container');
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
    t_top_search.appendChild(t_top_search_input);
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
    t_top_delete.setAttribute('onclick', 'deleteTablePopup(this.id.slice(0, -16));');
    t_top.appendChild(t_top_delete);
    t_top.appendChild(t_top_edit);
    t_top.appendChild(t_top_layout);
    t_top.appendChild(t_top_color);
    t_top.appendChild(t_top_search);

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
    t_container.appendChild(buildTable(t));
    t_container.appendChild(t_bottom);

    tables.appendChild(t_container);
}

function updateTable(name) {
    var table_container = document.getElementById(name.concat('-container'));
    var table = document.getElementById(name);
    table_container.removeChild(table);
    for (i = 0; i < tables.length; i++) {
        if (tables[i].name == name) {
            table_container.insertBefore(buildTable(tables[i]), table_container.children[1]);
            return;
        }
    }
}

function removePopup(type) {
    var popups_container = document.getElementById('popups-container');
    var popup = document.getElementById(type.concat('-popup'));
    var new_table_button = document.getElementById('new-table-button');
    popups_container.removeChild(popup);
    popups_container.style.display = 'none';
    new_table_button.style.display = 'block';
}

function removeTable(name) {
    var tables_container = document.getElementById('tables-container');
    var table_container = document.getElementById(name.concat('-container'));
    tables_container.removeChild(table_container);
    removePopup('dt');
}

function addColumn(name) {
    for (i = 0; i < tables.length; i++) {
        if (tables[i].name == name) {
            tables[i].add_col();
            updateTable(name);
            return;
        }
    }
}

function removeRow(name, row) {
    for (i = 0; i < tables.length; i++) {
        if (tables[i].name == name) {
            tables[i].rmv_row(row);
            updateTable(name);
            return;
        }
    }
}

var ot = new Table('olympics-table');
ot.add_col('Year');
ot.add_col('Season');
ot.add_col('Host');
ot.add_col('City');
ot.add_col('Continent');
ot.add_row([2022, 'winter', 'China', 'Beijing', 'Asia']);
ot.add_row([2020, 'summer', 'Japan', 'Tokyo', 'Asia']);
ot.add_row([2018, 'winter', 'Korea', 'Pyeongchang', 'Asia']);
ot.add_row([2016,'summer','Brazil','Rio de Janeiro', 'South America']);
ot.add_row([2014, 'winter', 'Russia', 'Sochi', 'Europe']);
ot.add_row([2012,'summer','United Kingdom','London', 'Europe']);
ot.add_row([2010, 'winter', 'Canada', 'Vancouver', 'North America']);
ot.add_row([2008, 'summer', 'China', 'Beijing', 'Asia']);
ot.add_row([2006, 'winter', 'Italy', 'Torino', 'Europe']);
ot.add_row([2004, 'summer', 'Greece', 'Athens', 'Europe']);
ot.add_row([2002, 'winter', 'United States', 'Salt Lake City', 'North America']);
ot.add_row([2000, 'summer', 'Australia', 'Sydney', 'Oceania']);
ot.add_row([1998, 'winter', 'Japan', 'Nagano', 'Asia']);
ot.add_row([1996, 'summer', 'United States', 'Atlanta', 'North America']);

var at = new Table('animals-table');
at.add_col('Name');
at.add_col('Class');
at.add_col('Diet');
at.add_col('Ecosystem');
at.add_row(['Gorilla', 'Mammal', 'Herbivore', 'Terrestrial']);
at.add_row(['Blue Whale', 'Mammal', 'Carnivore', 'Aquatic']);
at.add_row(['Cheetah', 'Mammal', 'Carnivore', 'Terrestrial']);
at.add_row(['Moose', 'Mammal', 'Herbivore', 'Terrestrial']);
at.add_row(['Grizzly Bear', 'Mammal', 'Omnivore', 'Terrestrial']);
at.add_row(['African Dwarf Frog', 'Amphibian', 'Carnivore', 'Aquatic']);
at.add_row(['Sea Turtle', 'Reptile', 'Omnivorous', 'Aquatic']);

var et = new Table('empty-table');

addTable(ot);
addTable(at);
addTable(et);
