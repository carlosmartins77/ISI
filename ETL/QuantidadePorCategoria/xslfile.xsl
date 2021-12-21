<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Categorias</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Nome</th>
      <th>Quantidade</th>
    </tr>
    <xsl:for-each select="Categorias/Categoria">
    <tr>
      <td><xsl:value-of select="Nome"/></td>
      <td><xsl:value-of select="Quantidade"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>