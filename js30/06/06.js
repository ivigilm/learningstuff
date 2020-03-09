window.onload = () => {
  const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const citiesData = [];
  const resultsList = document.getElementById('results');
  const searchInput = document.getElementsByTagName('input')[0];

  searchInput.addEventListener('keyup', showResults);

  getData();

  function showResults() {
    const results = findMatches();

    const suggestions = results.map(place => {
      const regex = new RegExp(searchInput.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${searchInput.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${searchInput.value}</span>`);
      return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
            `;
    }).join('');
    resultsList.innerHTML = suggestions;
  }

  function getData() {
    fetch(endPoint)
      .then(r => r.json())
      .then(data => citiesData.push(...data))
      .catch(e => console.error(`¡Oh, no! ${e}`));
  }

  function findMatches() {
    let search = searchInput.value;

    return citiesData.filter(place => {
      const regex = new RegExp(search, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
