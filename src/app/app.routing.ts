import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './artists/albums/albums.component';

const routes:Routes = [
	{ path: 'artists', component: ArtistsComponent },
	{ path: 'albums', component: AlbumsComponent },
	{ path: 'artist/:name/albums', component: AlbumsComponent },
	{ path: '**', redirectTo: '/artists', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);