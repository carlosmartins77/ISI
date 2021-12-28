<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <body>
    <h2>Produtos</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Marca</th>
          <th scope="col">Categoria</th>
          <th scope="col">Ano</th>
          <th scope="col">Preço</th>
          <th scope="col">Quantidade</th>
        </tr>
      </thead>
      <tbody>
      <xsl:for-each select="Produtos/Produto">
        <tr>
          <th scope="row"><xsl:value-of select="Id"/></th>
          <td><xsl:value-of select="Nome"/></td>
          <td><xsl:value-of select="Marca"/></td>
          <td><xsl:value-of select="Categoria"/></td>
          <td><xsl:value-of select="Ano"/></td>
          <td><xsl:value-of select="Preço"/></td>
          <td><xsl:value-of select="Quantidade"/></td>
        </tr>
      </xsl:for-each>
      </tbody>
    </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>