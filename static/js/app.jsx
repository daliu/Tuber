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

    {url:'https://auth.berkeley.edu/', name:'Casey Stewart: $10', description:'Teaches Economics', tags: ['African American Studies']},
    {url:'http://calcentral.berkeley.edu/', name:'Matthew DAgati: $11',  description:'Teaches Business Institutions.', tags: ['Art']},
    {url:'http://bearfacts.berkeley.edu/', name:'Louis Angelo: $10',  description:'Teaches ', tags: ['Celtic Studies']},
    {url:'http://bmail.berkeley.edu/',name:'Patrick Holmes: $12', tags: ['Chemistry']},
    {url:'http://calmail.berkeley.edu/', name:'Omar Ali: $11', description:'Gmail/email for Berkeley.', tags: ['Comparative Literature']},
    {url:'http://bdrive.berkeley.edu/', name:'Sarika Pawar: $12', description:'Google Drive for Berkeley.', tags: ['Computer Science']},
    {url:'http://bcal.berkeley.edu/', name:'Omar Shahid: $15', description:'Google Calendar for Berkeley.', tags: ['East Asian Languages and Cultures']},
    {url:'http://services.housing.berkeley.edu/c1c/static/index.htm', name:'Matthew Hsu', description:'Cal 1 Card.', tags: ['Earth and Planetary Science']},
    {url:'https://calnet.berkeley.edu/directory/index.pl', name: 'Czarinah Libang', description:'Stalk Search for people', tags: ['English']},
    {url:'http://ls.berkeley.edu/', name:'Lekha Reddy', tags: ['Film']},
    {url:'http://chemistry.berkeley.edu/', name:'Lauren Kelly', tags: ['French']},
    {url:'http://coe.berkeley.edu/', name:'Derek Qiu', tags: ['German']},
    {url:'http://nature.berkeley.edu/site/index.php', name:'Sarah Lin', tags: ['Integrative Biology']},
    {url:'http://www.haas.berkeley.edu/', name:'Dylan Staats', tags: ['Italian']},
    {url:'http://easybib.com/', name:'Andrew Millman', description:'Easily make a bibliography in MLA format.', tags: ['Mathematics']},
    {url:'http://oneclass.com/freetextbooks', name:'Penny Xu', tags: ['Middle Eastern Studies']},
    {url:'http://beta.classmint.com/', name:'Classmint',description:'An interactive browser-ba.', tags: ['Molecular and Cell Biology']},
    {url:'http://s.tudy.it/twkpdup', name:'StudyBlue',description:'Make or all of your classes. (Get a free month of Pro with the url above.)', tags: ['Music']},
    {url:'http://uguru.me/', name:'Uguru.me', description:'Tutor someone in a Berkeley class or a skill to earn some money', tags: ['Near Eastern Studies']},
    {url:'http://www.lib.berkeley.edu/Catalogs/guide.html', name:'Library Catalog', tags: ['Peace and Conflict Studies']},
    {url:'http://www.lib.berkeley.edu/Help/connecting_off_campus.html', name:'Library Proxy/VPN', tags: ['Philosophy']},
    {url:'http://telebears.berkeley.edu/', name:'Telebears', descriptions:'SIGN UP FOR YOUR CLASSES HERE.', tags: ['Physics']},
    {url:'http://schedule.berkeley.edu/', name:'Schedule of Classes', descriptions:'All the classes and their times.', tags: ['Public Health']},
    {url:'http://decal.org/courses', name:'DeCals', descriptions:'Student-run 1-2 unit P/NP classes.', tags: ['Rhetoric']},
    {url:'http://ninjacourses.com/', name:'NinjaCourses', descriptions:'Helps you plan out your schedule, see reviews of classes & professors', tags: ['Scandinavian']},
    {url:'http://www.ratemyprofessors.com/SelectTeacher.jsp?sid=1072', name:'Rate My Professors', descriptions:'Ratings for professors.', tags: ['Slavid Languages and Literatures']},
    {url:'http://bearcheck.herokuapp.com/', name:'BearCheck',  descriptions:'Get notified when a seat opens up in a class you want!', tags: ['Statistics']},


    {url:'https://auth.berkeley.edu/', name:'Apple Steve: $10', description:'Teaches Economics', tags: ['African American Studies']},
    {url:'http://calcentral.berkeley.edu/', name:'Arther Macquire: $11',  description:'Teaches Business Institutions.', tags: ['Art']},
    {url:'http://bearfacts.berkeley.edu/', name:'Will Smith: $10',  description:'Teaches ', tags: ['Celtic Studies']},
    {url:'http://bmail.berkeley.edu/',name:'Darth Vader: $12', tags: ['Chemistry']},
    {url:'http://calmail.berkeley.edu/', name:'George Monkey: $11', description:'Gmail/email for Berkeley.', tags: ['Comparative Literature']},
    {url:'http://bdrive.berkeley.edu/', name:'Muhammad Dankaki: $12', description:'Google Drive for Berkeley.', tags: ['Computer Science']},
    {url:'http://bcal.berkeley.edu/', name:'Naruto Uzamaki: $10', description:'Google Calendar for Berkeley.', tags: ['East Asian Languages and Cultures']},
    {url:'http://services.housing.berkeley.edu/c1c/static/index.htm', name:'Thomas Jefferson: $.02', description:'Cal 1 Card.', tags: ['Earth and Planetary Science']},
    {url:'https://calnet.berkeley.edu/directory/index.pl', name: 'Greg Scottman: $4', description:'Stalk Search for people', tags: ['English']},
    {url:'http://ls.berkeley.edu/', name:'David Letterman: $1', tags: ['Film']},
    {url:'http://chemistry.berkeley.edu/', name:'Jeffery Chen: $20', tags: ['French']},
    {url:'http://coe.berkeley.edu/', name:'Derek Jeter: $20', tags: ['German']},
    {url:'http://nature.berkeley.edu/site/index.php', name:'Jack Lin: $10', tags: ['Integrative Biology']},
    {url:'http://www.haas.berkeley.edu/', name:'Dylan Mizzazi: $20', tags: ['Italian']},
    {url:'http://easybib.com/', name:'Georgia Sunnyweather: $10', description:'Easily make a bibliography in MLA format.', tags: ['Mathematics']},
    {url:'http://oneclass.com/freetextbooks', name:'Jesse Stephenson: $15', tags: ['Middle Eastern Studies']},
    {url:'http://beta.classmint.com/', name:'Paul Jackson: $20',description:'An interactive browser-ba.', tags: ['Molecular and Cell Biology']},
    {url:'http://s.tudy.it/twkpdup', name:'Sam Leavanny: $17',description:'Make or all of your classes. (Get a free month of Pro with the url above.)', tags: ['Music']},
    {url:'http://uguru.me/', name:'Jessica Mah', description:'Tutor someone in a Berkeley class or a skill to earn some money', tags: ['Near Eastern Studies']},
    {url:'http://www.lib.berkeley.edu/Catalogs/guide.html', name:'Ivy Nguyen: $10', tags: ['Peace and Conflict Studies']},
    {url:'http://www.lib.berkeley.edu/Help/connecting_off_campus.html', name:'Claudia Wong: $10', tags: ['Philosophy']},
    {url:'http://telebears.berkeley.edu/', name:'Victor Ngo: $13', descriptions:'SIGN UP FOR YOUR CLASSES HERE.', tags: ['Physics']},
    {url:'http://schedule.berkeley.edu/', name:'Joseph Chang: $25', descriptions:'All the classes and their times.', tags: ['Public Health']},
    {url:'http://decal.org/courses', name:'Ted Armstrong: $14', descriptions:'Student-run 1-2 unit P/NP classes.', tags: ['Rhetoric']},
    {url:'http://ninjacourses.com/', name:'Alan Tong: $25', descriptions:'Helps you plan out your schedule, see reviews of classes & professors', tags: ['Scandinavian']},
    {url:'http://www.ratemyprofessors.com/SelectTeacher.jsp?sid=1072', name:'Rhianna Smith', descriptions:'Ratings for professors.', tags: ['Slavid Languages and Literatures']},
    {url:'http://bearcheck.herokuapp.com/', name:'Beyonce: $1',  descriptions:'Get notified when a seat opens up in a class you want!', tags: ['Statistics']}

    {url:'https://auth.berkeley.edu/', name:'Amy Sanders: $15', description:'Teaches Economics', tags: ['African American Studies']},
    {url:'http://calcentral.berkeley.edu/', name:'Lakisha Emmanuel: $12',  description:'Teaches Business Institutions.', tags: ['Art']},
    {url:'http://bearfacts.berkeley.edu/', name:'Naomi Watts: $12',  description:'Teaches ', tags: ['Celtic Studies']},
    {url:'http://bmail.berkeley.edu/',name:'Steven McQueen: $13', tags: ['Chemistry']},
    {url:'http://calmail.berkeley.edu/', name:'Natasha Goldestein: $11', description:'Gmail/email for Berkeley.', tags: ['Comparative Literature']},
    {url:'http://bdrive.berkeley.edu/', name:'Lemony Snicker: $12', description:'Google Drive for Berkeley.', tags: ['Computer Science']},
    {url:'http://bcal.berkeley.edu/', name:'Roger Timus $12', description:'Google Calendar for Berkeley.', tags: ['East Asian Languages and Cultures']},
    {url:'http://services.housing.berkeley.edu/c1c/static/index.htm', name:'Tyrone Seidell: $11', description:'Cal 1 Card.', tags: ['Earth and Planetary Science']},
    {url:'https://calnet.berkeley.edu/directory/index.pl', name: 'Czarinah Libang: $15', description:'Stalk Search for people', tags: ['English']},
    {url:'http://ls.berkeley.edu/', name:'Marissa Natura: $16', tags: ['Film']},
    {url:'http://chemistry.berkeley.edu/', name:'Nathan Hemsworth: $13', tags: ['French']},
    {url:'http://coe.berkeley.edu/', name:'Yodisha Monswell: $12', tags: ['German']},
    {url:'http://nature.berkeley.edu/site/index.php', name:'Carey Underhill: $14', tags: ['Integrative Biology']},
    {url:'http://www.haas.berkeley.edu/', name:'Victoria Piaccio: $20', tags: ['Italian']},
    {url:'http://easybib.com/', name:'Stephenie Valintine: $10', description:'Easily make a bibliography in MLA format.', tags: ['Mathematics']},
    {url:'http://oneclass.com/freetextbooks', name:'Sasha Huey: $15', tags: ['Middle Eastern Studies']},
    {url:'http://beta.classmint.com/', name:'Magaret Thatcher: $20',description:'An interactive browser-ba.', tags: ['Molecular and Cell Biology']},
    {url:'http://s.tudy.it/twkpdup', name:'Christina Parry: $17',description:'Make or all of your classes. (Get a free month of Pro with the url above.)', tags: ['Music']},
    {url:'http://uguru.me/', name:'Lindsey Conlan', description:'Tutor someone in a Berkeley class or a skill to earn some money', tags: ['Near Eastern Studies']},
    {url:'http://www.lib.berkeley.edu/Catalogs/guide.html', name:'Kat Lin: $10', tags: ['Peace and Conflict Studies']},
    {url:'http://www.lib.berkeley.edu/Help/connecting_off_campus.html', name:'Heather Chang: $10', tags: ['Philosophy']},
    {url:'http://telebears.berkeley.edu/', name:'Carolyn Guazzi: $13', descriptions:'SIGN UP FOR YOUR CLASSES HERE.', tags: ['Physics']},
    {url:'http://schedule.berkeley.edu/', name:'Joe Marchellis: $25', descriptions:'All the classes and their times.', tags: ['Public Health']},
    {url:'http://decal.org/courses', name:'Thomas Rossi: $14', descriptions:'Student-run 1-2 unit P/NP classes.', tags: ['Rhetoric']},
    {url:'http://ninjacourses.com/', name:'Ray Morgan: $25', descriptions:'Helps you plan out your schedule, see reviews of classes & professors', tags: ['Scandinavian']},
    {url:'http://www.ratemyprofessors.com/SelectTeacher.jsp?sid=1072', name:'Courtney Shultz: $10', descriptions:'Ratings for professors.', tags: ['Slavid Languages and Literatures']},
    {url:'http://bearcheck.herokuapp.com/', name:'George Washing Machine: $1',  descriptions:'Get notified when a seat opens up in a class you want!', tags: ['Statistics']}
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
