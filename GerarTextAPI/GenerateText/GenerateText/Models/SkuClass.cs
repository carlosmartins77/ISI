using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenerateText.Models
{
    public class SkuClass
    {
        #region Atributos

        public int idSku;
        public string nameSku;

        #endregion

        #region Construtores
        public SkuClass()
        {

        }

        public SkuClass(int s, string n)
        {
            idSku = s;
            nameSku = n;
        }

        #endregion

        #region Propriedades
        public int IdSku
        {
            get { return idSku; }
            set { idSku = value; }
        }

        public string NameSku
        {
            get { return nameSku; }
            set { nameSku = value; }
        }
        #endregion

    }

}
