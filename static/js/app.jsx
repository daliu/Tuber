/** @jsx React.DOM */

(function() {

  imgMap = {
    'African American Studies': 'textbooks.jpg',
    'Art': 'art.jpg',
    'Celtic Studies': 'textbooks.jpg',
    'Chemistry': 'jobs.jpg',
    'Comparative Literature': 'textbooks.jpg',
    'Computer Science': 'software.png',
    'East Asian Languages and Cultures': 'dave.jpg',
    'Earth and Planetary Science': 'events.jpg',
    'English': 'classes.png',
    'Film': 'housing.png',
    'French': 'textbooks.jpg',
    'German': 'textbooks.jpg',
    'Integrative Biology': 'food.png',
    'Italian': 'textbooks.jpg',
    'Mathematics': 'software.png',
    'Middle Eastern Studies': 'software.png',
    'Molecular and Cell Biology': 'food.png',
    'Music': 'housing.jpg',
    'Near Eastern Studies': 'general.png',
    'Peace and Conflict Studies': 'food.png',
    'Philosophy': 'academic.jpg',
    'Physics': 'academic.jpg',
    'Public Health': 'academic.jpg',
    'Rhetoric': 'housing.png',
    'Scandinavian': 'jobs.jpg',
    'Slavic Languages and Literatures': 'jobs.jpg',
    'South and Southeast Asian Studies': 'miscellaneous.jpg',
    'Statistics': 'advice.jpg',
  };

  var sites = [

  ];

  sites = _.sortBy(sites, 'name');

  String.prototype.contains = function(substring) {
    return this.toLowerCase().indexOf(substring) !== -1;
  };


  var CategoryList = React.createClass({
    render: function() {
      var props = this.props;

      var categories = this.props.categories.map(function(category) {
        var clickHandler = props.onCategorySelect;
        var selected = props.selectedCategory === category;
        var onClick = function () {
          if (props.selectedCategory === category) {
            clickHandler('');
          } else {
            clickHandler(category)
          }
        };
        var className = "list-group-item" + (selected ? " selected" : "");
        return (
          <a href="#" className={className} onClick={onClick}>{category}</a>
        );
      });

      return (
        <div className="list-group">
          { categories }
        </div>
      );
    }
  });

  var Tiles = React.createClass({
    render: function() {
      var tiles = this.props.data.map(function(datum) {
  
        var urlBase = 'static/img/';
        var imgUrl = imgMap[_.first(datum.tags)];

        if (imgUrl) {
          imgUrl = urlBase + imgUrl;
        } else {
          imgUrl = 'http://placehold.it/300x300';
        }

        return (
          <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <img src={imgUrl} alt="" />
                <div className="colored-box"></div>
                <a href={ datum.url }><h4 className="caption">{ datum.name }</h4></a>
              </div>
          </div>
        );
      });

      return (
        <div className="row">
          { tiles }
        </div>
      );
    }
  });

  var SearchBar = React.createClass({
    handleChange: function() {
      this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value);
    },

    render: function() {
      return (
        <div className="row search-bar">
          <input type="text" className="form-control" placeholder="Search..."
                 value={this.props.filterText} onChange={this.handleChange}
                 ref="filterTextInput" />
        </div>
      );
    }
  });

  var AppComponent = React.createClass({

    getInitialState: function() {
      return {
        filterText: '',
        selectedCategory: '',
        selectedTile: '',
        filteredData: this.props.data
      };
    },

    filterData: function(filterText, selectedCategory) {
      var filter = filterText.toLowerCase();
      var category = selectedCategory.toLowerCase();

      var data = _(this.props.data);
      if (filter !== '') {
        data = data.filter(function (datum) {
            var nameMatches = datum.name.contains(filter);
            var tagsMatch = _(datum.tags)
                              .map(function(tag) { return tag.contains(filter); })
                              .any();
            return tagsMatch || nameMatches;
          });
      }

      if (category !== '') {
        data = data.filter(function (datum) {
          return _(datum.tags)
                   .map(function (tag) { return tag.contains(category); })
                   .any();
        });
      }

      data = data.first(25).sortBy('name');

      this.setState({ filterText: filterText, selectedCategory: selectedCategory, filteredData: data.value() });
    },

    onCategorySelect: function(category) {
      this.filterData(this.state.filterText, category);
    },

    onUserInput: function(filterText) {
      this.filterData(filterText, this.state.selectedCategory);
    },

    render: function() {
      var categories = _(this.props.data)
                         .map(function(datum) { return datum.tags; })
                         .flatten()
                         .uniq()
                         .sortBy()
                         .value();

      return (
      <div className="row">

        <div className="col-md-3">
          <CategoryList selectedCategory={this.state.selectedCategory} onCategorySelect={this.onCategorySelect} categories={categories} />
        </div>

        <div className="col-md-9">
          <SearchBar onUserInput={ this.onUserInput }/>
          <Tiles data={ this.state.filteredData } />
        </div>

      </div>
      );
    }
  });

  React.renderComponent(<AppComponent data={sites} />, document.getElementById('react-binding'));
})()
