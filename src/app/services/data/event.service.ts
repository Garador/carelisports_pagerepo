import { Injectable } from '@angular/core';
import { SPORT_ID } from 'src/app/common/enums';
import { Event } from 'src/app/common/classes/event';
import { Image } from 'src/app/common/classes/image';
import { SportService } from './sport.service';
import * as moment from 'moment';
import { ImageService } from './image.service';

@Injectable({
	providedIn: 'root'
})
export class EventService {

	constructor(
		private _SportService: SportService,
		private _imageService: ImageService
	) { }

	getUpcomingEvents() {
		let events = this.getEvents()
		.sort((ev:Event, ev2:Event)=>{
			if (ev.start_date.getTime() > ev2.start_date.getTime()){
				return 1;
			}else if(ev.start_date.getTime() < ev2.start_date.getTime()){
				return -1;
			}else{
				return 0;
			}
		});
		events.filter((ev)=>{
			return (events.indexOf(ev)<15);
		});
		return events;
	}

	getEvents() {
		let events: Event[] = [];
		let ev:Event;
		let img: Image;
		let d_r:string[] = [];

		ev = new Event();
		ev.start_date = moment().month(1).date(15).toDate();
		ev.end_date = moment().month(1).date(17).toDate();
		//ev.end_date = moment().set("month", 1).set("day", 17).toDate();
		ev.description_short = `7200
		Los niveles de competencia puede variar... Siguiendo el día de piscina,
		los equipos podrían jugar hasta cinco (5) partidos.
		Las opciones de paquetes para partidos incluyen
		el lodging en Walt Disney World Resort(s)`;
		ev.id = "1";
		d_r = this.getEventDatesAndRates(ev.id);
		ev.propsedDatesText = d_r[0];
		ev.proposedRatesText = d_r[1];
		ev.ref_image = this._imageService.getEventRefImages(ev.id);
		ev.carousel_images = this._imageService.getEventCarouselImages(ev.id);
		ev.title = "Disney President’s Day Soccer Festival";
		ev.sport = this._SportService.getSport(SPORT_ID.SOCCER);
		events.push(ev);

		ev = new Event()
		ev.start_date = moment().month(0).date(31).toDate();
		ev.end_date = moment().month(1).date(2).toDate();
		//ev.end_date = moment().set("month", 1).set("day", 17).toDate();
		ev.description_short = `Evento deportivo con 5 noches de alojamiento en
		Disney All-star Movies, 2 Dias Magic Your Way Base Ticket, con costo de la Registracion,
		Transportacion terrestre y Extras`;
		ev.id = "U9-U19";
		d_r = this.getEventDatesAndRates(ev.id)
		ev.propsedDatesText = d_r[0];
		ev.proposedRatesText = d_r[1];
		ev.ref_image = this._imageService.getEventRefImages(ev.id);
		ev.carousel_images = this._imageService.getEventCarouselImages(ev.id);
		ev.title = "Festival Disney Field Hockey";
		ev.sport = this._SportService.getSport(SPORT_ID.HOCKEY);
		events.push(ev);

		ev = new Event();
		ev.start_date = moment().month(0).date(8).toDate();
		ev.end_date = moment().month(0).date(12).toDate();
		ev.title = "Walt Disney World Marathon Weekend";
		ev.description_short = `La Maratón Mundial de Walt Disney es una serie anual de maratones y 
		carreras de fin de semana que se celebra cada mes de enero en Orlando, 
		Florida, organizada por RunDisney, una serie de carreras y 
		división de Disney Sports Enterprises`;
		ev.id = "WDM-8ENE";
		d_r = this.getEventDatesAndRates(ev.id)
		ev.propsedDatesText = d_r[0];
		ev.proposedRatesText = d_r[1];
		ev.ref_image = this._imageService.getEventRefImages(ev.id);
		ev.carousel_images = this._imageService.getEventCarouselImages(ev.id);
		ev.sport = this._SportService.getSport(SPORT_ID.MARATHON);
		events.push(ev);

		return events;

	}

	getEventDatesAndRates(eventId:string){
		if(eventId === "1"){
			return [
				`<h1>El paquete incluye:</h1>
				<ul>
					<li>4 noches en el Disney’s All Star Sports Resort (Enero 30- Febrero 4, 2020)</li>
					<li>Tournament Registration Fee</li>
					<li>2- Day Magic Your Way® Base Ticket:
						<ul>
							<li>Tienes dos (2) dias de admision para visitar y 
							seleccionar dos de los siguientes parques:<br></li>
							<li>
								<ul>
									<li>Magic Kingdom</li>
									<li>Epcot</li>
									<li>Disney’s Hollywood Studios®</li>
									<li>Disney’s Animal Kingdom® Theme Park</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>Extras -:
						<ul>
							<li>Trasporte Disney’s Magical Express®- Bus desde Orlando International Airport al Resort Hospedaje</li>
							<li>Transporte de Resort de Hospedaje a los parques temáticos Walt Disney World®</li>
							<li> Línea de Bus Especial desde el Resort Hospedaje hasta el complejo 
							ESPN Wide World of Sports</li>
							<li>Paquete de fotos - Fotos de 1 juego con el servicio Game Day Photos</li>
							<li>Pase de Expectador por la Duración del Evento (Spectator Length of Event (LOE)) a ESPN Wide World Of Sports </li>
							<li>Pelota del Partido (1 Por equipo)</li>
						</ul>
					</li>
				</ul>
				<p>
					<small>
						Todos los precios de los paquetes indicados son por persona y se 
						basan en una habitacion estándar para 4 personas. El numero de 
						paquetes disponibles a esta tarifa es limitado y se requieren 
						reservaciones por adelantado. Estancia minima de la noche requerida. 
						No mas de 4 personas por habitacion. Se pueden aplicar tarifas 
						adicionales si hay mas de 2 adultos por habitacion. Cada boleto 
						diario que se usa en cualquier parque tematico constituye un dia 
						completo de uso. Algunas actividades / eventos pueden tener un 
						precio por separado. Se pueden aplicar restricciones de edad para 
						acceder a ciertas instalaciones. El numero de visitas depende del 
						numero de dias de los boletos comprados de Magic Your Way. Los tipos 
						de boletos y los derechos estan sujetos a cambios sin previo aviso. 
						Los boletos no son transferibles ni reembolsables. El estacionamiento 
						no esta incluido a menos que se hospede en los Hoteles del Walt 
						Disney World Resort. Los paquetes deportivos a precios especiales 
						son solo para participantes y sus espectadores. No se aplican otros 
						descuentos. La oferta es intransferible. 
					</small>
				</p>
				<p style="font-size:1em;">
					​<span style="text-decoration: underline;">
						<strong>Los boletos no son transferibles ni reembolsables</strong>
					</span>
				</p>
				
				`
				,	`<h1><strong>Partidos</strong><br></h1>
					<p><br><strong>Partidos Garantizados: </strong>3<br></p>
					<p><br><strong>Equipos Totales: </strong>300+<br></p>
					<br/>
					<div 
						class="table-responsive">
						<table class="table table-striped">
							<thead>
								<th colspan="4" style="background-color:rgb(200, 20, 20);color:white;text-align:center;">
									Paquete de Registro Temprano
									<br/>
									<small>Lidera en precio</small>
								</th>
							</thead>
							<tbody>
								<tr style="font-weight:bold;background-color:white;">
									<td>Single</td>
									<td>Double</td>
									<td>Triple</td>
									<td>Quad</td>
								</tr>
								<tr>
									<td>$1.609</td>
									<td>$1.109</td>
									<td>$943</td>
									<td>$860</td>
								</tr>
							</tbody>
						</table>
					</div>
				`
			]
		}else if(eventId === "U9-U19"){
			return [
				`<h1>El paquete incluye:</h1>
				<ul>
					<li>4 noches en el Disney’s All Star Sports Resort (Enero 30- Febrero 4, 2020)</li>
					<li>Costo de la Registracion</li>
					<li>2- Day Magic Your Way® Base Ticket:
						<ul>
							<li>Tienes dos (2) dias de admision para visitar y 
							seleccionar dos de los siguientes parques:<br></li>
							<li>
								<ul>
									<li>Magic Kingdom</li>
									<li>Epcot</li>
									<li>Disney’s Hollywood Studios®</li>
									<li>Disney’s Animal Kingdom® Theme Park</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>Transportacion terrestre:
						<ul>
							<li>Traslado en bus desde el aeropuerto de Orlando en el Disney Magical 
							Express al hotel de Disney y del hotel al aeropuerto</li>
							<li>Transportacion de ida y vuelta desde el hotel a los parques de atracciones.</li>
							<li>Transportacion Privada de ida y vuelta desde el hotel 
							ESPN Wide World of Sports Complex.</li>
						</ul>
					</li>
					
					<li>Extras -:
						<ul>
							<li>Paquete de fotos - Fotos de 1 juego con el servicio Game Day Photos</li>
							<li>Pase para los espectadores al ESPN Wide World Of Sports</li>
						</ul>
					</li>
				</ul>
				<p>
					<small>
					Todos los precios de los paquetes indicados son por persona y se 
					basan en una habitacion estándar para 4 personas. El numero de 
					paquetes disponibles a esta tarifa es limitado y se requieren 
					reservaciones por adelantado. Estancia minima de la noche requerida. 
					No mas de 4 personas por habitacion. Se pueden aplicar tarifas 
					adicionales si hay mas de 2 adultos por habitacion. Cada boleto 
					diario que se usa en cualquier parque tematico constituye un dia 
					completo de uso. Algunas actividades / eventos pueden tener un 
					precio por separado. Se pueden aplicar restricciones de edad para 
					acceder a ciertas instalaciones. El numero de visitas depende del 
					numero de dias de los boletos comprados de Magic Your Way. Los tipos 
					de boletos y los derechos estan sujetos a cambios sin previo aviso. 
					Los boletos no son transferibles ni reembolsables. El estacionamiento 
					no esta incluido a menos que se hospede en los Hoteles del Walt 
					Disney World Resort. Los paquetes deportivos a precios especiales 
					son solo para participantes y sus espectadores. No se aplican otros 
					descuentos. La oferta es intransferible. 
					</small>
				</p>
				<p style="font-size:1em;">
					​<span style="text-decoration: underline;">
						<strong>Los boletos no son transferibles ni reembolsables</strong>
					</span>
				</p>`
				,	`
					<div 
						class="table-responsive">
						<table class="table table-striped">
							<thead>
								<th colspan="4" style="background-color:rgb(200, 20, 20);color:white;text-align:center;">
									Precio de registración
									<br/>
									<small>Precio reservado antes de 30 días.</small>
								</th>
							</thead>
							<tbody>
								<tr style="font-weight:bold;background-color:white;">
									<td>Simple</td>
									<td>Double</td>
									<td>Triple</td>
									<td>Quad</td>
								</tr>
								<tr>
									<td>$1.253</td>
									<td>$889</td>
									<td>$767</td>
									<td>$707</td>
								</tr>
							</tbody>
						</table>
					</div>
				`
			]
		}else if(eventId === "WDM-8ENE"){
			return [
				`<h1>El paquete incluye:</h1>
				<ul>
					<li>Transporte Disney Magical Express - Bus desde Orlando International Airport al Host Resort</li>
					<li>Transporte desde Host Resort a los parques tematicos de Walt Disney World</li>
					<li>Transporte desde Host Resort a las Carreras</li>
				</ul>
				<p>
					<small>
						La oferta es válida para la mayoría de las noches desde el 2 de enero hasta el 12 de enero de 2020. Los paquetes a precios especiales son
						solo para participantes de la carrera y sus espectadores. Los paquetes están sujetos a disponibilidad y se venden a grupos aprobados a
						discreción de runDisney Group Sales. Paquete solo disponible mediante reserva a través de Disney Sports Travel. Todos los precios de los
						paquetes indicados son por persona según una habitación estándar. Se requiere una estadía mínima de tres (3) noches consecutivas. No más
						de 4 personas por habitación estándar. Se pueden aplicar cargos adicionales por adulto si hay más de 2 adultos por habitación en Disney
						Value, Moderate y Deluxe Resorts y Studios en Disney Deluxe Villa Resorts. El número de habitaciones asignadas para esta oferta es limitado.
						Todos en la misma habitación deben estar en el mismo paquete. Se requieren reservaciones por adelantado. No se aplican otros descuentos.
						No se puede combinar con ningún otro descuento o promoción. La oferta es intransferible. Los precios de los paquetes están sujetos a
						cambios sin previo aviso. Los eventos de carrera y los precios están sujetos a cambios sin previo aviso. Los términos completos, las
						condiciones, la cantidad final y el precio de los paquetes no se confirmarán hasta que runDisney y su grupo ejecuten un contrato por escrito.
					</small>
				</p>
				<p style="font-size:1em;">
					​<span style="text-decoration: underline;">
						<strong>Los boletos no son transferibles ni reembolsables</strong>
					</span>
				</p>`
				,	`
				<h2>
					<strong><font size="6">Carreras:&nbsp;</font></strong>
				</h2>
				<div class="paragraph">
					<strong>&nbsp;Walt Disney World 5K ($87) <font color="#df2424"></font>
					</strong><br><em>Jueves, Enero 9, 2020</em>
					<br><br>
					<strong>Walt Disney World 10K ($127)</strong>
					<br><em>Viernes, Enero 10, 2020</em><br>
					<br>
					<strong>Walt Disney World Half Marathon ($178)</strong>
					<br><em>Sábado, Enero 11, 2020</em>
					<br><br>
					<strong>Walt Disney World Marathon ($180)</strong>
					<br><em>Domingo, Enero 12, 2020</em><br>
					<br>
					<strong>Goofy's Race and a Half Challenge ($370)</strong>
					<br>
					<em>Enero 11 - Enero 12, 2020
					</em>
					<br><font size="2">Incluye el registro para ambos, &nbsp;<em>Walt Disney World</em>
					&nbsp;Half Marathon&nbsp;y&nbsp;
					<em>Walt Disney World</em>
					&nbsp;Marathon, lo cual es 39.3 millas en dos días. &nbsp;
					

					Al completar ambas carreras, te será otorgado
					con la &nbsp;Medalla Goofy además de tus otras medallas de ganador del Half Marathon y Marathon.
					</font><br><br>
					<strong>Dopey Challenge ($575)</strong>
					<br><em>Enero 9 - 12, 2020</em><br><font size="2">
					<span>
					
					Cuatro dias y 48.6 millas de carreras mágicas!&nbsp;Incluye los registros para&nbsp;
					</span>el 5K, 10K, Half Marathon y&nbsp;

					<em>Walt Disney World®</em>&nbsp;Marathon<span>. 
					&nbsp;
					Al completar todas las cuatro carreras serás recompensado con la medalla Dopey Challenge
					y la &nbsp;medalla Goofy Challenge, en adición a tus medallas de completación
					5k, 10k, Half Marathon - seis piezas de increibles medallas para celebrar
					tu épicos logros!</span></font>
					
					<br><br><strong>Kids Dashes&nbsp;</strong><br>
					&nbsp; &nbsp; &nbsp;Kid's 100 Meter Dash&nbsp;
					<span>($20)&nbsp;</span><br><span>&nbsp; &nbsp; &nbsp;
					</span>Kid's 200-Meter Dash&nbsp;<span>
					($20)&nbsp;</span><br>
					<span>&nbsp; &nbsp; &nbsp;</span>
					Kid's Diaper Dash&nbsp;<span>($20)&nbsp;</span>
					<br><em>Sábado Enero 11, 2020</em>
					<br><br><strong>Kids One Mile Run ($30)&nbsp;</strong>
					
					<br><em>Sábado Enero 11, 2020&nbsp;</em><br>
					<br><span style="color:rgb(42, 42, 42)">
					Los costes de registro de las carreras son
					precios planos sin ningun coste adicional (si son agendados separadamente a través
					de runDisney.com, allí habrá un coste adicional de procesamiento, usualmente el 6.6%).
					</span></div> 
					
					<div><div class="wsite-image wsite-image-border-none "
					style="padding-top:10px;padding-bottom:10px;margin-left:0px;margin-right:10px;text-align:left">
					<div style="display:block;font-size:90%"></div>
					</div></div>					
				</td>
				<!--
					<div 
						class="table-responsive">
						<table class="table table-striped">
							<thead>
								<th colspan="4" style="background-color:rgb(3, 45, 105);color:white;text-align:center;">
									Precio de paquete por persona - Disney Pop Century Resort
								</th>
							</thead>
							<tbody>
								<tr style="font-weight:bold;background-color:white;">
									<td>Simple</td>
									<td>Double</td>
									<td>Triple</td>
									<td>Quad</td>
								</tr>
								<tr>
									<td>$519</td>
									<td>$256</td>
									<td>$173</td>
									<td>$130</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br/>
					<div 
						class="table-responsive">
						<table class="table table-striped">
							<thead>
								<th colspan="4" style="background-color:rgb(3, 45, 105);color:white;text-align:center;">
									Precio de paquete por persona - Disney Caribbean Beach Resort
								</th>
							</thead>
							<tbody>
								<tr style="font-weight:bold;background-color:white;">
									<td>Simple</td>
									<td>Double</td>
									<td>Triple</td>
									<td>Quad</td>
								</tr>
								<tr>
									<td>$806</td>
									<td>$403</td>
									<td>$269</td>
									<td>$201</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<small><i>Precio no incluye costo de la carrera. La carrera se agrega al precio final. Sujeto a disponibilidad</i>.</small>
					</div>
					<br/>
					<div 
						class="table-responsive">
						<table class="table table-striped">
							<thead>
								<th colspan="2" style="background-color:rgb(3, 45, 105);color:white;text-align:center;">Precio de la carrera (no incluidas en el precio del paquete)</th>
							</thead>
							<tbody>
								<tr>
									<td>Walt Disney World Marathon</td>
									<td style="font-weight:bold">$180</td>
								</tr>
								<tr>
									<td>Walt Disney World Half Marathon</td>
									<td style="font-weight:bold">$178</td>
								</tr>
								<tr>
									<td>Dopey Challenge</td>
									<td style="font-weight:bold">$575</td>
								</tr>
								<tr>
									<td>Goofy’s Race and a Half Challenge</td>
									<td style="font-weight:bold">$370</td>
								</tr>
								<tr>
									<td>Walt Disney World 10K</td>
									<td style="font-weight:bold">$127</td>
								</tr>
								<tr>
									<td>Walt Disney World 5K</td>
									<td style="font-weight:bold">$87</td>
								</tr>
								<tr>
									<td>runDisney Kids Races</td>
									<td style="font-weight:bold">$20-$30</td>
								</tr>
							</tbody>
						</table>
					</div>
					-->
				`
			]
		}
		return [
			`<h1>The basic elements*</h1>
			<ul>
				<li>Minimum 2-Night Stay at a Walt Disney World® Resort</li>
				<li>Race Registration(s)</li>
				<li>Optional tickets to one of the following Theme Parks per day:
					<ul>
						<li>Magic Kingdom®<br></li>
						<li>Epcot®<br></li>
						<li>Disney’s Hollywood Studios®</li>
						<li>Disney’s Animal Kingdom® Theme Park</li>
					</ul>
				</li>
				<li>Ground Transportation</li>
				<li>Optional Meal Plan</li>
				<li>Ground Transportation:
					<ul>
						<li>Disney’s Magical Express® Transportation- Bus from Orlando International Airport to Host Resort<br></li>
						<li>Transportation from Host Resort to Walt Disney World® Theme Parks<br></li>
						<li>Transportation from Host Resort to the Races​</li>
					</ul>
				</li>
			</ul>
			<p style="font-size:1em;">These reservations require a $200 room deposit and the total cost of race registrations
				due upon booking.</p>
			<p style="font-size:1em;">​<span style="text-decoration: underline;">Race registrations are non-refundable and
					non-transferrable</span>. If the resort reservation is cancelled, the room deposit is refundable but the race
				registrations connected to it
				will be forfeited (*trip insurance is available and for qualifying events, race registrations are covered as
				part of the package).</p>`
				
				,`<h1><strong>Matches</strong><br></h1>
				<p><br><strong>Walt Disney World 5K ($87)</strong><br><em>Thursday, January 9, 2020</em><br><br><strong>Walt
						Disney World 10K ($127)</strong><br><em>Friday, January 10, 2020</em><br><br><strong>Walt Disney World Half
						Marathon ($188)</strong><br><em>Saturday, January 11, 2020</em><br><br><strong>Walt Disney World Marathon
						($190)</strong><br><em>Sunday, January 12, 2020</em><br><br><strong>Goofy's Race and a Half Challenge
						($385)&nbsp;(INVENTORY RUNNING LOW- ANNIVERSARY YEAR!)</strong><br><em>January 11 - January 12, 2020</em><br>Includes
					registrations for both the&nbsp;<em>Walt Disney World</em>&nbsp;Half Marathon&nbsp;and&nbsp;<em>Walt Disney
						World</em>&nbsp;Marathon, which is 39.3 miles in two days. &nbsp;By completing both races you will be awarded
					the&nbsp;Goofy medal in addition to your Half Marathon and Marathon finisher medals.<br><br><strong>Dopey
						Challenge ($590)</strong><br><em>January 9 -12, 2020&nbsp;</em><br>Four days and 48.6 miles of magical running!
					&nbsp;Includes
					registrations for&nbsp;the 5K, 10K, Half Marathon and&nbsp;<em>Walt Disney World®</em>&nbsp;Marathon. &nbsp;By
					completing all four races you will be awarded the Dopey Challenge medal and the&nbsp;Goofy Challenge medal in
					addition to your 5k, 10k, Half Marathon, and Marathon finisher medals - six pieces of incredible race "bling" to
					celebrate an epic accomplishment!<br><br><strong>Kids Dashes&nbsp;</strong><br>&nbsp; &nbsp; &nbsp;Kid's 100
					Meter Dash&nbsp;($20)&nbsp;<br>&nbsp; &nbsp; &nbsp;Kid's 200-Meter Dash&nbsp;($20)&nbsp;<br>&nbsp; &nbsp;
					&nbsp;Kid's Diaper Dash&nbsp;($20)&nbsp;<br><em>Saturday January 11, 2020</em><br><br><strong>Kids One Mile Run
						($30)&nbsp;</strong><br><em>Saturday January 11, 2020&nbsp;</em><br><br>The
					race registrations costs are flat rates with no additional processing fees (if booked separately through
					runDisney.com, there will be an additional process fee added, usually 6.6%).<br><br><br></p>
			`
		]
	}
}
