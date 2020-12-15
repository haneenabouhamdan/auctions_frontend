import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import React from 'react' 
import '../style/User.css'
 
class ListCountries extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }
 
  selectCountry (val) {
    this.setState({ country: val });
  }
 
  selectRegion (val) {
    this.setState({ region: val });
  }
 
  render () {
    const { country, region } = this.state;
    return (
      <div>
          
          
        <CountryDropdown
          value={country}
          className="country"
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          className="country reg"
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}
export default ListCountries;