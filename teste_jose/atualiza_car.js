$("[title='Comprar']").click(function(){
           buyNow(this.rel);
		   $(".carrinho_n_itens").load( location.href+" .carrinho_n_itens");
	    });




/*div.content:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a
#bt_comprar
buyNow(this.rel);
javascript:void(0);
location.href + " #mydiv"*/
