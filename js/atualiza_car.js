$("[title='Comprar']").click(function(){
           buyNow(this.rel);
		   $(".carrinho_n_itens").load( location.href+" .carrinho_n_itens");
	    });




/*div.content:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a
#bt_comprar
buyNow(this.rel);
javascript:void(0);
location.href + " #mydiv"*/


/*botao de comprar com function de modal e reload de carrinho*/
        $("[title='Comprar']").removeAttr("onclick");
        $(".carrinho_n_itens").load(location.href+" .carrinho_n_itens");

	    $("[title='Comprar']").click(function(){
	    	buyNow(this.rel);
		   $(".carrinho_n_itens").load(location.href+" .carrinho_n_itens");

	    });
	    

		
		fancybox-skin