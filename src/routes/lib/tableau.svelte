<div class="container">
    <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
    </table> 
</div>
<style lang="scss">
    table{
        background-color: burlywood;
        padding:10px;
    }
    tr{
        background-color: coral;
    }
    th{
        background-color: violet;
        padding:5px;
    }
    td{
        background-color: wheat;
        padding: 3px;
    }
    .container {
        display: grid;
		grid-template-columns: auto;
		justify-items: center;
        padding: 10%;
    }
</style>