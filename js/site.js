	$(document).ready(function(){
		/* responsive layout */
		if ($(window).width() <= 500) {
			$('#shippingBox input:first').css({'font-size':'28.5px','height':'auto'});
			$('#shoppingCart #cupomBox input').css({'font-size':'35px','height':'auto'});
			$('#detalhe_produto td:first').css({'position':'absolute'});
			/* verifica se existe embalagem para presente */
			if ($('#shoppingCart #htmlCart fieldset').hasClass('embalar')) {
				$('#shoppingCart #htmlCart tr:last td:first').attr({'colspan':'4'});
				$('#shoppingCart #htmlCart').bind('DOMNodeInserted', function(event) { 
					$('#htmlCart tr:last td:first').attr({'colspan':'4'});
				});
			} else {
				$('#shoppingCart #htmlCart tr:last td:first').attr({'colspan':'3'});
				$('#shoppingCart #htmlCart').bind('DOMNodeInserted', function(event) { 
					$('#htmlCart tr:last td:first').attr({'colspan':'3'});
				});
			}
			/* fim - verifica se existe embalagem para presente */

			/* carrega a página depois de excluir o produto no carrinho  */
			$(window).load(function() {
				$('.cart-remove-item').click(function(event) {
					location.reload(true);
				});
			});
			/* fim - carrega a página depois de excluir o produto no carrinho  */

		} /*end if */
		else {
			$('#shippingBox input:first').css({'font-size':'15px','height':'auto'});
			$('#cupomBox input').css({'font-size':'15px','height':'auto'});
		}

		/* preencher categoria */
		$('.cabecalho_topo').delay(200).slideDown();
		$('#menu_categoria li').each(function(index, el) {
			var link = $(this).find('a:first').attr('href');
			var name = $(this).find('span').text();

			$('.categoria_flutuante_drop').append(' <li><a href="'+link+'">'+name+'</a></li> ');
		});
		/* fim preencher categoria */


		/* PIXEL TRANS */
		$('body').find('img[src$="/imagens/pixel_trans.gif"]').remove();

		/* COLUNAS*/
		$('.coluna_centro').addClass('col-lg-12');

		/* IMAGENS RESPONSIVAS */
		$('.banner_pos5 img').addClass('img-responsive');

		/* Galeria Produto Facynbox */
		$('#product_gallery li a').click(function(event) {
			$(this).fancybox();
		});

		/* Carrinho */
		$('#detalhe_produto .texto11').find('tr[background$="/boxes/bg_cabecalho_maisinfoproduto.gif"]').remove();

		/* Remove classe carrinho */
		$('#shopping_cart img').removeClass('img-responsive');
		$('#checkout img').removeClass('img-responsive');

		/* Página do Produto */
		$('#detalhe_produto table tbody tr td:contains("Mais informações sobre este produto")').remove();
		$('#detalhe_produto img').addClass('img-responsive');

		/* Imagem Pag. Produto */
		$('.etalage_thumb img').removeClass('img-responsive');


		/* Calcular Frete */

		$('#shippingBox table tbody tr td:first').contents().unwrap().wrap('<span></span>');
		$('#shippingBox table tbody tr span:first').css('padding-left','9px');

		$('#shippingBox table tbody tr td:lt(2)').contents().unwrap().wrap('<div></div>');
		$('#shippingBox table tbody tr div:first').css('padding-left','9px');

		$('#shippingBox table tbody tr td:last').contents().unwrap().wrap('<div></div>');
		$('#shippingBox table tbody tr div:last').css('padding-left','5px');

		/* Colunas Laterais */
		$('.boxes_left table.texto11:nth-child(1) tr td').addClass('list-group');

		/* CORPO */
		$('.botoes_adicionais').addClass('hidden-sm hidden-xs');
		$('#shoppingCart').addClass('col-lg-12 col-md-8');

		/* Formulário Cadastro */
		$('#create_account .box-form .topic label').contents().unwrap().wrap('</h4>');

		/* Formulário Criar Conta - Telefone */
		$('div.box-form:lt(3):last ul li input:nth-child(2)').addClass('info_tel1');
		$('div.box-form:lt(3):last ul li input:nth-child(3)').addClass('info_tel2');

		/* Finalizar Pedido Botão */

		/* Checkout Botão Finalizar */

		/* Checkout */
		$('#checkout table:first').addClass('table-bordered');

		/* Fale Conosco */
		$('#contact_us img').removeClass('img_responsive');

		/* Insert TAG H1 */
		var name_categoria = $('.texto_cabecalho_pagina tr td:first').text();

		$('.texto_cabecalho_pagina tr td:first').replaceWith('<h1>' + name_categoria + '</h1>');
        
        /*botao de comprar com function de modal e reload de carrinho*/
	    $("[title='Comprar']").removeAttr("onclick");
        $(".carrinho_n_itens").load(location.href+" .carrinho_n_itens");
        $("[title='Comprar']").click(function(){
           buyNow(this.rel);
		   $(".carrinho_n_itens").load(location.href+" .carrinho_n_itens");   
	    });
       

	});/* End CODE*/



