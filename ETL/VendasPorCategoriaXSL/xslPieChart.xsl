<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <head>
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
      <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          
          var data = google.visualization.arrayToDataTable([
          ['Categoria', 'Quantidade'],
           <xsl:for-each select="Categorias/Categoria">
            ['<xsl:value-of select="Nome"/>', <xsl:value-of select="Quantidade"/>],
          </xsl:for-each>
        ]);

          var options = {
            title: 'Vendas por categoria'
          };

          var chart = new google.visualization.PieChart(document.getElementById('piechart'));

          chart.draw(data, options);
        }
      </script>
    </head>
    <body>
      <div id="piechart" style="width: 900px; height: 500px;"></div>
    </body>
  </html>
  </xsl:template>

</xsl:stylesheet>
