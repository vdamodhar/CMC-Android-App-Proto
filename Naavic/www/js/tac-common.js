var TAC = function() {
	//Private methods and objects go here
	
	//Public methods and objects
	return {
		
		fixedTableHeader : function(tableid) {
			//Disabled for phones.
			if ($(document).width() < 450) { return false; }
			//Remove the old fixed header if it exists
			$("#" + tableid + "_fixed_header").remove();
			
			var target = $("#" + tableid);
			var html = '<div id="' + tableid + '_fixed_header" class="fixed_table_header">';
			var theaders = $(target).find('th');
	
			for (var i = 0; i < theaders.length; i++) {
				html += '<div class="fixedheadercell" style="width: ' + $(theaders[i]).width() + 'px;"><strong>' + $(theaders[i]).html() + '</strong></div>';
			}
	
			html += '</div>';
	
			$('body').append(html);
	
			var left = $(target).position().left;
			var top = $(target).position().top;
			$("#" + tableid + "_fixed_header").offset( { top: top, left: left });	
	
			//Handle window resize events
			$(window).resize(function() {
				var html = '';
				var theaders = $(target).find('th');
				for (var i = 0; i < theaders.length; i++) {
					html += '<div class="fixedheadercell" style="width: ' + $(theaders[i]).width() + 'px;"><strong>' + $(theaders[i]).html() + '</strong></div>';
				}
				$("#" + tableid + "_fixed_header").html(html);
				var left = $(target).position().left;
				var top = $(target).position().top;
				$("#" + tableid + "_fixed_header").offset( { top: top, left: left });	
			});
		},

		//A generic time series object for use with highcharts
		TimeSeries : function(name) {
			this.data = [];
			this.length = 0;
			this.name = name;
			
			this.add = function(dateobj, value) {
				this.data.push([dateobj, value]);
				this.length++;
			}
			
			this.getTimeSeries = function() {
				var series = [];
				for (var i = 0; i < this.data.length; i++) {
					series.push([this.data[i][0].getTimeStamp(), this.data[i][1]]);	
				}
				return series;
			}
		},
		//A collection of TimeSeries objects of variable length
		TimeSeriesCollection : function() {
			var series = [];
			
			this.addSeries = function(timeseries) {
				series.push(timeseries);
			}
			
			this.getSeriesByName = function(name) {
				for (var i = 0; i < series.length; i++) {
					if (series[i].name == name) {
						return series[i];
					}
				}
				return false;
			}
			
			this.getDataTable = function() {
				var DataTable = new TAC.DataTable();
				for (var i = 0; i < series.length; i++) {
					var index;
					if (series[i].name == "pred") { index = 0; }
					else if (series[i].name == "prelim") { index = 1; }
					else if (series[i].name == "ver") { index = 2; }
					//else if (series[i].name == "ofs") { index = 3; } //added for OFS data
					else { index = i; }
					for (var j = 0; j < series[i].length; j++) {
						DataTable.addData(series[i].data[j][0].getDate(), index, series[i].data[j][1]);	
					}
					//DataTable.addSeries(series[i]);
				}
				return DataTable;
			}
		},
		//Converts from human readable date/time strings to timestamps and vice versa
		DateString : function(datestring) {
			var date = datestring;

			//Strip out extraneous characters
			date = date.replace(/[- :]/g, "");
		  	//date = date.replace(/-/g, "");
			//date = date.replace(/ /g, "");
	      	//date = date.replace(/:/g, "");
			
			this.getDate = function() {
				return date;
			}
	
			this.getYear = function() {
				return date.substr(0, 4);
			}
			this.getMonth = function() {
				return date.substr(4, 2);
			}
			this.getDay = function() {
				return date.substr(6, 2);
			}
			this.getHour = function() {
				return date.substr(8, 2);
			}
			this.getMinute = function() {
				return date.substr(10, 2);
			}
			this.toDateString = function() {
				return this.getYear() + '/' + this.getMonth() + '/' + this.getDay() + ' ' + this.getHour() + ':' + this.getMinute();
			}
			
			this.getTimeStamp = function() {
				return Date.UTC(this.getYear(), (this.getMonth() - 1), this.getDay(), this.getHour(), this.getMinute());
			}
			
			this.subtractDay = function() {
				var d = new Date(this.getYear(), (this.getMonth() - 1), this.getDay(), this.getHour(), this.getMinute());
				d.setDate(d.getDate() - 1);
				date = d.getFullYear() + '' + TAC.pad2(d.getMonth() + 1) + '' + TAC.pad2(d.getDate()) + '' + TAC.pad2(d.getHours()) + TAC.pad2(d.getMinutes());
			}
			
			this.addDay = function() {
				var d = new Date(this.getYear(), (this.getMonth() - 1), this.getDay(), this.getHour(), this.getMinute());
				d.setDate(d.getDate() + 1);
				date = d.getFullYear() + '' + TAC.pad2(d.getMonth() + 1) + '' + TAC.pad2(d.getDate()) + '' + TAC.pad2(d.getHours()) + TAC.pad2(d.getMinutes());
			}
		},
		//A simple array of two values for determining minimum and maximum of a time series
		MinMax: function() {
			var min = null;
			var max = null;
			this.getMin = function() {
				return min;
			}
			this.getMax = function() {
				return max;
			}
			this.update = function(value) {
				if (value == null) { return false; }
				if (min == null) { min = value; }
				if (max == null) { max = value; }
				if (value < min) { min = value; }
				else if (value > max) { max = value; }
			}
		},
		isStationGL: function(stationid) {
			var isgl = 0;
			//St. Lawrence
			if (stationid >= 8311000 && stationid <= 8311999) {
				isgl = 1;
			}
			//Lake Ontario
			if (stationid >= 9052000 && stationid <= 9052999) {
				isgl = 1;
			}
			//Niagara River
			if (stationid >= 9063000 && stationid <= 9063019) {
				isgl = 1;
			}
			//Lake Erie
			if (stationid >= 9063020 && stationid <= 9063999) {
				isgl = 1;
			}
			//Detroit River
			if (stationid >= 9044000 && stationid <= 9044999) {
				isgl = 1;
			}
			//Lake St. Clair
			if (stationid >= 9034000 && stationid <= 9044999) {
				isgl = 1;
			}
			//St. Clair River
			if (stationid >= 9014000 && stationid <= 9014999) {
				isgl = 1;
			}
			//Lake Huron
			if (stationid >= 9075000 && stationid <= 9075099) {
				isgl = 1;
			}
			//St. Mary's River
			if (stationid >= 9076000 && stationid <= 9076999) {
				isgl = 1;
			}
			//Lake Michigan
			if (stationid >= 9087000 && stationid <= 9087999) {
				isgl = 1;
			}
			//Lake Superior
			if (stationid >= 9099000 && stationid <= 9099999) {
				isgl = 1;
			}
			return isgl;
		},
		//An object to contain multiple time series for data listing purposes
		DataTable: function() {
			//An array of DataRow objects
			//var data = [];
			this.data = {};
			this.length = 0;
			
			//An index of min and max values for each time series
			var minmaxes = [];
			
			DataRow = function(timestamp) {
				var time = timestamp;
				var values = [];
				
				this.getTimeStamp = function(index) {
					return time;
				}
				
				this.getValueByIndex = function(index) {
					if (index > values.length) {
						//alert("Invalid index requested for getValueByIndex()");
					} else {
						return values[index];
					}
				}
				
				this.setValueByIndex = function(index, value) {
					//Inflate the values array until it can accomodate the requested index
					while (values.length <= index) {
						values.push(null);
					}
					while (minmaxes.length <= index) {
						minmaxes.push(new TAC.MinMax());
					}
					values[index] = value;
					minmaxes[index].update(value);
				}
			}
			
			this.addData = function(timestamp, index, value) {
				//Increment the length if this is a new timestamp
				if (!this.data.hasOwnProperty(timestamp)) {
					this.data[timestamp] = new DataRow(timestamp);
					this.length++;
				}
				this.data[timestamp].setValueByIndex(index, value);
			}

			this.getData = function() {
				var returndata = [];
				var keys = [];
				for (var key in this.data) {
					if (this.data.hasOwnProperty(key)) {
						keys.push(key);
					}
				}
				keys.sort();
				for (var i = 0; i < keys.length; i++) {
				    returndata.push(this.data[keys[i]]);
				}
				return returndata;	
			}
			this.getMinMaxByIndex = function(index) {
				//Returns a MinMax object for the time series by column index.
				return minmaxes[index];
			}			
		},
		pad2: function(number) {
			return (number < 10 ? '0' : '') + number;
		},
		webservices: function(SourceURLs, target) {
			var html = "<div class='modal-header'>";
			html += "<button class='close' aria-hidden='true' data-dismiss='modal' type='button'>x</button>";
			html += "<h3>Web Services</h3>";
			html += "</div><div class='modal-body'>";
			html += "The following web service calls were used in the retrieval of CO-OPS' data for this page:<br><br>";
	
			for (var i = 0; i < SourceURLs.length; i++) {
				var pieces = SourceURLs[i].split(":");
				var title = pieces[0];
				var link = pieces[1];
				html += "<div class='row-fluid'><div class='span9'>";
				html += "<strong>" + title + "</strong>: " + link + "&format=json</div>";
				html += "<div class='span3'>";
				html += "<a href='" + link + "&format=xml' target='_blank'><span class='label label-warning'>XML</span></a>";
				html += " <a href='" + link + "&format=json' target='_blank'><span class='label label-warning'>JSON</span></a>";
				if(!link.includes("mdapi")){
					html += " <a href='" + link + "&format=csv' target='_blank'><span class='label label-warning'>CSV</span></a></div></div><br>";
				}else{
					html += " <span class='label'></span></div></div><br>";
				}
			}

			html += "All data is served via the <a href='/api/' target='_blank'>CO-OPS Data API.</a>";
			html += "</div>";
			$(target).html(html);
			$(target).modal();
		},
		getDirTextFromDegrees: function(currdir) {
			switch (true) {
				case (currdir >= 348.75 || currdir <= 11.25):
				currdir = "N";
				break;
			case (currdir >= 11.25 && currdir <= 33.75):
				currdir = "NNE";
				break;
			case (currdir >= 33.75 && currdir <= 56.25):
				currdir = "NE";
				break;
			case (currdir >= 56.25 && currdir <= 78.75):
				currdir = "ENE";
				break;
			case (currdir >= 78.75 && currdir <= 101.25):
				currdir = "E";
				break;
			case (currdir >= 101.25 && currdir <= 123.75):
				currdir = "ESE";
				break;
			case (currdir >= 123.75 && currdir <= 146.25):
				currdir = "SE";
				break;
			case (currdir >= 146.25 && currdir <= 168.75):
				currdir = "SSE";
				break;
			case (currdir >= 168.75 && currdir <= 191.25):
				currdir = "S";
				break;
			case (currdir >= 191.25 && currdir <= 213.75):
				currdir = "SSW";
				break;
			case (currdir >= 213.75 && currdir <= 236.25):
				currdir = "SW";
				break;
			case (currdir >= 236.25 && currdir <= 258.75):
				currdir = "WSW";
				break;
			case (currdir >= 258.75 && currdir <= 281.25):
				currdir = "W";
				break;
			case (currdir >= 281.25 && currdir <= 303.75):
				currdir = "WNW";
				break;
			case (currdir >= 303.75 && currdir <= 326.25):
				currdir = "NW";
				break;
			case (currdir >= 326.25 && currdir <= 348.75):
				currdir = "NNW";
				break;
			default:
				break;
			}
		return currdir;	
	}

	};
}();